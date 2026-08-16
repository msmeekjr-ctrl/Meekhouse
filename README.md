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
- Export / Import JSON so you stay in control of the data

## Quick start (GitHub Pages)

1. This repository already contains `index.html` and `data.json`.
2. Go to the repo **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/ (root)**.
5. Click Save. After a minute the site will be live.

## How to update your data

Because this is a free static site (no server), permanent changes go through the JSON file:

1. Make edits in the live website (they are stored temporarily in your browser).
2. Click **Export JSON** — this downloads a fresh `data.json`.
3. In this GitHub repo, replace the existing `data.json` with the new file.
4. Commit and push. Refresh the site.

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

---

Built for the Meekhouse project.
