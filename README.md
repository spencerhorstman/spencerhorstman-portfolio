# Spencer Horstman — Product Portfolio

This is your product case study site, ready to deploy to Netlify.

## Quick Deploy to Netlify (5 minutes)

### Option A: Deploy via GitHub (Recommended — auto-updates when you push changes)

1. **Create a GitHub account** (if you don't have one): https://github.com/signup

2. **Install Git** (if not already installed):
   - Mac: Open Terminal and run `xcode-select --install`
   - Windows: Download from https://git-scm.com/download/win

3. **Create a new GitHub repository**:
   - Go to https://github.com/new
   - Name it `spencerhorstman-portfolio`
   - Leave it as **Public**
   - Click **Create repository**

4. **Push this project to GitHub** (run these commands in Terminal/Command Prompt):
   ```bash
   cd spencerhorstman-portfolio
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/spencerhorstman-portfolio.git
   git push -u origin main
   ```

5. **Deploy on Netlify**:
   - Go to https://app.netlify.com/signup and sign up with your GitHub account
   - Click **"Add new site"** → **"Import an existing project"**
   - Select **GitHub** and authorize Netlify
   - Choose your `spencerhorstman-portfolio` repository
   - Netlify will auto-detect the settings. Verify:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click **"Deploy site"**

6. **Set your custom site name**:
   - Once deployed, go to **Site configuration** → **Change site name**
   - Set it to `spencerhorstman` (your URL will be `spencerhorstman.netlify.app`)

### Option B: Drag-and-Drop Deploy (Fastest, but manual updates)

1. **Install Node.js**: https://nodejs.org (download the LTS version)

2. **Build the project locally**:
   ```bash
   cd spencerhorstman-portfolio
   npm install
   npm run build
   ```

3. **Deploy**:
   - Go to https://app.netlify.com/drop
   - Drag the `dist` folder onto the page
   - Done! Netlify gives you a URL immediately.
   - Go to **Site configuration** → **Change site name** to set `spencerhorstman.netlify.app`

## Local Development

To preview changes locally before deploying:

```bash
npm install      # First time only
npm run dev      # Starts local server at http://localhost:5173
```

## Editing Content

All case study content is in `src/CaseStudy.jsx`. Open it in any text editor (VS Code recommended: https://code.visualstudio.com) and search for the text you want to change.

After editing, if you used Option A:
```bash
git add .
git commit -m "Updated case study content"
git push
```
Netlify will automatically redeploy.

## Your Resume URL

Add this to your resume and LinkedIn:
**spencerhorstman.netlify.app**
