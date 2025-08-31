# Sample Static Site (HTML / CSS / JS)

This repository contains a minimal static website ready to deploy to AWS Amplify via GitHub.

What is included:

- `index.html` — entry page (vanilla HTML)
- `css/styles.css` — simple responsive styles
- `js/app.js` — tiny interactive script (theme toggle + CTA)
- `amplify.yml` — Amplify Console build settings for static sites (no build step)

Quick start (local):

1. Open the folder in your terminal (PowerShell):

```powershell
cd "c:\0myFiles\Aramco\Fundamentals of Cloud Computing\Day 1\Sample-copilot"
# optional: init git, commit and push to your GitHub repo
git init
git add .
git commit -m "Initial scaffold: static site for AWS Amplify"
# create a repo on GitHub and push (replace <remote-url>)
git remote add origin <remote-url>
git branch -M main
git push -u origin main
```

Deploy to AWS Amplify (via GitHub):

1. In the AWS Console, open AWS Amplify > Deploy > Get started (or Connect app).
2. Choose GitHub and authorize if needed, then select the repository and branch you pushed to.
3. Amplify Console will use `amplify.yml` if present. For a plain static site we set `baseDirectory: /` and include all files.
4. Start the deploy. Amplify will build (here it runs a no-op) and publish the site.

Notes and next steps:

- If you introduce a build step (e.g., bundler, SSG), update `amplify.yml` to run the build and set `baseDirectory` to the output folder (like `dist` or `build`).
- You can also configure custom domains in the Amplify Console.

License: MIT
