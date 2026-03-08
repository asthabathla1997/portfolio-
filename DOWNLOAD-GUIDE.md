# How to Download and Use Your Portfolio

## 📥 Downloading from Figma Make

### Method 1: Download Button (If Available)
1. Look for a **Download** or **Export** button in Figma Make
2. Click it to download a ZIP file of your project
3. Extract the ZIP file to your desired location

### Method 2: Copy Project Files
If there's no download button, you'll need to manually copy the files:

1. **Create a new folder** on your computer for the portfolio
2. **Copy all the following files and folders** from Figma Make:
   - `/src` folder (entire folder)
   - `/package.json`
   - `/vite.config.ts`
   - `/postcss.config.mjs`
   - `/tsconfig.json` (if present)
   - Any other config files at the root level

## 🔧 Setting Up Locally

### Step 1: Install Node.js and pnpm

1. **Install Node.js:**
   - Download from [nodejs.org](https://nodejs.org/)
   - Install version 18 or higher
   - Verify installation:
     ```bash
     node --version
     ```

2. **Install pnpm:**
   ```bash
   npm install -g pnpm
   ```

### Step 2: Install Dependencies

1. Open your terminal/command prompt
2. Navigate to your project folder:
   ```bash
   cd path/to/your/portfolio
   ```
3. Install all dependencies:
   ```bash
   pnpm install
   ```
   
   This will download all required packages (React, Tailwind, Motion, etc.)

### Step 3: Run the Development Server

```bash
pnpm run dev
```

Your portfolio will open in your browser at `http://localhost:5173`

## 🌐 Deploying to GitHub Pages

### Step 1: Create a GitHub Account
If you don't have one, sign up at [github.com](https://github.com)

### Step 2: Create a New Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `your-username.github.io` (for main site)
   - OR any name like `portfolio` (for project site)
3. Make it **Public**
4. Click **Create repository**

### Step 3: Upload Your Code

**Option A: Using Git (Recommended)**

1. **Initialize git in your project:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

2. **Connect to GitHub:**
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

**Option B: Using GitHub Website**

1. On your repository page, click **Add file** → **Upload files**
2. Drag and drop all your project files
3. Click **Commit changes**

### Step 4: Set Up GitHub Actions Deployment

1. **Create the workflow file:**
   - In your project, create: `.github/workflows/deploy.yml`
   - Copy the GitHub Actions config from the README.md file

2. **Push the workflow:**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions deployment"
   git push
   ```

3. **Enable GitHub Pages:**
   - Go to your repository → Settings → Pages
   - Under "Source", select **GitHub Actions**
   - Save

4. **Wait for deployment:**
   - Go to the **Actions** tab in your repository
   - Watch the deployment process
   - Once complete, your site will be live!

### Step 5: Access Your Site

Your portfolio will be available at:
- **Main site:** `https://your-username.github.io/`
- **Project site:** `https://your-username.github.io/repo-name/`

## ✏️ Customization Checklist

Before deploying, make sure to update:

- [ ] **Your name** (replace "Your Name" everywhere)
- [ ] **GitHub link** (`https://github.com/yourusername`)
- [ ] **LinkedIn link** (`https://linkedin.com/in/yourprofile`)
- [ ] **Email address** in the About section
- [ ] **Location** in the About section
- [ ] **Projects** - replace with your actual projects
- [ ] **Stats** - update with your real numbers
- [ ] **Resume content** in Layout.tsx
- [ ] **Specialties** in the About section

### Where to Make Changes

All customizable content is in:
- `/src/app/pages/Home.tsx` - Main page content
- `/src/app/pages/Projects.tsx` - Projects page
- `/src/app/components/Layout.tsx` - Navigation and resume

## 🔄 Making Updates After Deployment

1. **Make your changes** in the code
2. **Test locally:**
   ```bash
   pnpm run dev
   ```
3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Updated portfolio content"
   git push
   ```
4. **GitHub Actions will automatically redeploy** your site!

## 🆘 Troubleshooting

### Issue: Dependencies won't install
**Solution:** Make sure you have Node.js 18+ installed
```bash
node --version
```

### Issue: Site shows 404 on GitHub Pages
**Solution:** 
1. Check that GitHub Pages is enabled in Settings → Pages
2. Verify the `base` path in `vite.config.ts` matches your URL structure

### Issue: Changes aren't showing up
**Solution:**
1. Clear your browser cache
2. Wait a few minutes for GitHub Pages to rebuild
3. Check the Actions tab for any deployment errors

### Issue: Images not loading
**Solution:** Make sure the image import path is correct and the image file exists in your project

## 📞 Getting Help

- Check the README.md for detailed documentation
- Review the GitHub Actions logs for deployment errors
- Search for similar issues on Stack Overflow
- Ask for help in web development communities

---

**You're all set! Happy coding! 🎉**
