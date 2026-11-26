# SpendWise — Interactive Personal Finance & Budget Tracker

## Project Description

**SpendWise** is a responsive personal finance and budget tracking web application. It provides an interactive dashboard where users can set a monthly budget, log expenses across six core categories (*Food & Dining*, *Transport*, *Housing & Rent*, *Entertainment*, *Savings*, and *Utilities*), filter records by category, delete entries, and monitor real-time spending alerts and remaining balance directly in the browser.

## Technologies Used

- **HTML5**: Semantic dashboard structure, accessible forms, ARIA live regions, and landmarks.
- **CSS3**: CSS Grid and Flexbox layouts, `:root` custom properties, automatic dark mode via `@media (prefers-color-scheme: dark)`, single-column responsiveness below `768px`, and `180ms` card hover/focus transitions.
- **Vanilla JavaScript (ES6+)**: Arrays, loops, conditional budget health checks, DOM manipulation, and event delegation.
- **Git & GitHub**: Version control and public source code hosting.
- **Netlify**: Static web hosting, custom subdomain configuration, and continuous deployment.

## GitHub Repository Information

- **Repository Name:** `spendwise-dashboard-shell`
- **Repository URL:** [https://github.com/emile-mulla/spendwise-dashboard-shell](https://github.com/emile-mulla/spendwise-dashboard-shell)
- **Primary Branch:** `main`

## Live Netlify Website URL

- **Live Site:** [https://spendwise-emile.netlify.app](https://spendwise-emile.netlify.app)

## Deployment Process Summary

1. Organized `index.html`, `style.css`, `script.js`, and `README.md` at the root of the public GitHub repository using relative asset paths (`href="style.css"` and `src="script.js"`).
2. Connected `emile-mulla/spendwise-dashboard-shell` to Netlify via **Import from Git** and deployed the `main` branch as a static HTML/CSS/JS site.
3. Configured a custom project subdomain (`spendwise-emile.netlify.app`) in Netlify project settings.
4. Verified Continuous Deployment by updating the sidebar badge in `index.html` to `Live on Netlify`, pushing the commit to `main`, and confirming Netlify automatically built and published the update.
5. Tested the live production URL across desktop and mobile viewports to confirm all styles, scripts, and interactive controls work without console errors.

## Challenges Encountered During Deployment

- **Temporary DNS/network interruption during `git push`:** Encountered `Could not resolve host: github.com` when pushing documentation updates; resolved by verifying internet connectivity and re-running `git add`, `git commit`, and `git push origin main`.
- **Browser caching after continuous deployment updates:** Used a hard refresh (`Ctrl+Shift+R`) after Netlify marked each new deploy as **Published** to verify the latest changes loaded immediately.

## Lessons Learned

- Keeping `index.html` and linked assets (`style.css`, `script.js`) at the repository root with relative paths prevents `404` asset errors on Netlify.
- Connecting GitHub to Netlify automates Continuous Deployment (CI/CD), turning every `git push` to `main` into an instant live update.
- Always inspect the public GitHub repository directly in the browser after pushing to confirm all files are complete and up to date before submitting.