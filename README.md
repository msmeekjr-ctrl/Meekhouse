# Meekhouse Finishes Tracker

A simple website to organize and track all the final finishes for your new home build.

**Recommended hosting:** Netlify (gives you a real one-click Save button)

## Features

- Pre-loaded rooms (bedrooms, bathrooms, kitchen, living, dining, office, garage, bonus)
- Custom finishes per room
- Status tracking (Pending → Picked → Ordered → Installed)
- Google Drive image support
- One-click **Save to GitHub** (when hosted on Netlify)
- Export / Import JSON for backups

---

## Deploy on Netlify (recommended)

### 1. Connect the repo
1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** and select the `Meekhouse` repository
4. Leave the build settings as defaults (it will use `netlify.toml`)
5. Click **Deploy site**

### 2. Add the GitHub token as a secret
1. In Netlify go to **Site configuration** → **Environment variables**
2. Click **Add a variable**
3. Key: `GITHUB_TOKEN`
4. Value: paste your **fine-grained personal access token**
   - The token only needs access to the `Meekhouse` repository
   - Permission required: **Contents → Read and write**
5. Save

### 3. Redeploy
After adding the environment variable, trigger a new deploy (Deploys → Trigger deploy → Deploy site).

Your site will now have a working green **Save to GitHub** button.

---

## How the Save button works

- The browser sends the current data to a Netlify Function
- The function (running on Netlify’s servers) uses the secret `GITHUB_TOKEN`
- It updates `data.json` in your GitHub repository
- The token never leaves Netlify’s servers and is never visible in the browser

---

## Local development

```bash
npm install
npx netlify dev
```

---

## Google Drive images

Use the account `meekhouse11460@gmail.com`.

1. Upload photo → Share → “Anyone with the link”
2. Paste the link into a finish
3. The site converts it automatically so the image displays

---

Built for the Meekhouse project.
