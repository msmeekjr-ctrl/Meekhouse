const { Octokit } = require("@octokit/rest");

exports.handler = async function (event) {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  // Check for the secret token
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Server misconfigured: GITHUB_TOKEN environment variable is missing",
      }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON body" }),
    };
  }

  const { data } = body;

  if (!data || !Array.isArray(data.rooms)) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Payload must contain a "data" object with a "rooms" array',
      }),
    };
  }

  const owner = "msmeekjr-ctrl";
  const repo = "Meekhouse";
  const path = "data.json";
  const branch = "main";

  const octokit = new Octokit({ auth: token });

  try {
    // Get the current file so we have the SHA (required for update)
    let sha;
    try {
      const { data: currentFile } = await octokit.repos.getContent({
        owner,
        repo,
        path,
        ref: branch,
      });
      sha = currentFile.sha;
    } catch (err) {
      // File might not exist yet
      if (err.status !== 404) throw err;
    }

    const content = Buffer.from(JSON.stringify(data, null, 2) + "\n").toString(
      "base64"
    );

    const message = `Update finishes data from Meekhouse site\n\nUpdated via Netlify function`;

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message,
      content,
      branch,
      sha, // undefined is fine if the file is new
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: true,
        message: "data.json updated successfully",
      }),
    };
  } catch (err) {
    console.error("GitHub API error:", err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to update file on GitHub",
        details: err.message,
      }),
    };
  }
};
