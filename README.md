# Crop Advisor

Enter soil nutrients (N, P, K), soil pH, temperature, humidity and rainfall to see which crops fit those conditions best.

Each crop has a typical growing range for every factor. A factor scores 1 inside its range and falls off linearly outside it. The crop's match score is the average across all seven factors.

**Note:** The ranges are illustrative, not agronomic advice. Check local agricultural extension services before planting.

## Run locally

Open `index.html` in any browser. No build step or server is needed.

## Tech

Plain HTML, CSS and JavaScript in one file. No dependencies except Google Fonts.

## Deploy to GitHub Pages

1. Create a new public repository on GitHub, for example `crop-advisor`.
2. From this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Crop Advisor"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/crop-advisor.git
   git push -u origin main
   ```
3. On GitHub, open **Settings → Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then save.
4. After about a minute, the site is live at `https://YOUR_USERNAME.github.io/crop-advisor/`.

To update the site, edit `index.html`, then run `git add .`, `git commit -m "Describe change"` and `git push`.
