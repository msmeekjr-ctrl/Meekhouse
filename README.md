# Meekhouse Finishes Tracker

A simple, free static website to organize and track all the final finishes for your new home build.

**Live site:** Once GitHub Pages is enabled → `https://msmeekjr-ctrl.github.io/Meekhouse/`

## What’s included

- Pre-loaded rooms: 4 Bedrooms, 4 Bathrooms, Bonus, Living, Dining, Kitchen, Office, Garage
- Default finishes for each room type (paint colors, tile, vanities, lighting, etc.)
- Add / edit / delete rooms and any custom finishes
- Status tracking: Pending → Picked → Ordered → Installed
- Image support via Google Drive links
- Search & filter
- Progress overview
- Export / Import JSON
- **Secure one-click update via GitHub Action** (no tokens in the website)

## Quick start (GitHub Pages)

1. This repository already contains `index.html` and `data.json`.
2. Go to the repo **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/ (root)**.
5. Click Save. After a minute the site will be live.

## How to update your data (recommended method)

Because this is a free static site, permanent changes go through `data.json`. The safest way is the GitHub Action:

### Using the GitHub Action (recommended)

1. Make your edits in the live website.
2. Click **Export JSON** and open the downloaded file (or just copy its contents).
3. Go to the repository → **Actions** tab.
4. In the left sidebar click **Update data.json**.
5. Click the **Run workflow** button.
6. Paste the entire contents of your exported `data.json` into the input box.
7. Click **Run workflow**.
8. Wait ~20–30 seconds. The Action will validate the JSON, update the file, and push it to `main`.
9. Refresh the live site — your changes are now live.

No personal access token is stored anywhere in the website or in the repository. The Action uses GitHub’s built-in token with only the permissions it needs.

### Alternative: Manual file replace

1. Export JSON from the site.
2. In the repo, replace the existing `data.json` with the new file.
3. Commit and push.

You can also keep the exported file as a local backup and re-import it anytime with the **Import JSON** button.

## Google Drive images

Recommended account: `meekhouse11460@gmail.com`

1. Upload the photo to Google Drive.
2. Right-click → **Share** → set General access to **Anyone with the link**.
3. Copy the link.
4. Paste it into the Image URLs field when editing a finish.
5. The site automatically converts most Drive share links into viewable images.

Tip: You can paste multiple image links (one per line).

## Local development

Just open `index.html` in a browser, or serve the folder with any static server:

```bash
npx serve .
```

## Tech

- Pure HTML + Tailwind CSS (CDN) + Alpine.js
- No build step, no backend, works on free GitHub Pages
- All data lives in `data.json`
- Updates via GitHub Actions (`workflow_dispatch`)

---

Built for the Meekhouse project.
