# Portfolio Website - Analyst Engineer

A modern, elegant portfolio website built with React, TypeScript, Tailwind CSS, and Motion (Framer Motion). Features a clean light theme with smooth animations and responsive design.

## 🎨 Features

- **Elegant Light Theme** - Professional design with clean aesthetics
- **Smooth Animations** - Powered by Motion/Framer Motion
- **Responsive Design** - Works beautifully on all devices
- **Two Main Pages:**
  - **Home** - Introduction, skills showcase, stats, and about section
  - **Projects** - Featured projects with detailed metrics and tags
- **Resume Download** - One-click resume download functionality
- **Social Links** - GitHub and LinkedIn integration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- pnpm package manager (or npm/yarn)

### Installation

1. **Install dependencies:**
```bash
pnpm install
```

2. **Run development server:**
```bash
pnpm run dev
```

3. **Build for production:**
```bash
pnpm run build
```

The built files will be in the `dist` folder.

## 📝 Customization

### Update Your Information

1. **Your Name & GitHub Link**
   - File: `/src/app/pages/Home.tsx`
   - Update line 98: `href="https://github.com/yourusername"`
   - Update line 103: `Your Name`
   - Update line 126: `href="https://github.com/yourusername"`
   - Update line 134: `href="https://linkedin.com/in/yourprofile"`

2. **Contact Information**
   - File: `/src/app/pages/Home.tsx`
   - Update lines 245, 250, 255 with your location, email, and specialties

3. **Footer**
   - File: `/src/app/components/Layout.tsx`
   - Update line 108: Replace "Your Name" with your actual name

4. **Resume Content**
   - File: `/src/app/components/Layout.tsx`
   - Update lines 11-40 with your actual resume content

5. **Stats**
   - File: `/src/app/pages/Home.tsx`
   - Update lines 53-58 with your real statistics

6. **Projects**
   - File: `/src/app/pages/Projects.tsx`
   - Replace the sample projects (lines 15-70) with your actual projects

## 🌐 Deploying to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. **Create `.github/workflows/deploy.yml`:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Push your code to the `main` branch

3. **Your site will be live at:**
   - `https://<USERNAME>.github.io/<REPO-NAME>/`

### Option 2: Manual Build & Upload

1. **Build the project:**
```bash
pnpm run build
```

2. **Upload the `dist` folder contents:**
   - Go to your GitHub repository
   - Create or update your `gh-pages` branch with the contents of the `dist` folder
   - Enable GitHub Pages in Settings → Pages, select the `gh-pages` branch

### Base URL Configuration

The `base` path in `vite.config.ts` is currently set to `'./'` for relative paths.

- **For `username.github.io` repository:** Keep as `base: './'`
- **For project repository (`username.github.io/project`):** Change to `base: '/project/'`

## 📁 Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Layout.tsx         # Navigation & Footer
│   │   │   └── ui/                # UI Components
│   │   ├── pages/
│   │   │   ├── Home.tsx           # Home page
│   │   │   └── Projects.tsx       # Projects page
│   │   ├── App.tsx                # Main app component
│   │   └── routes.ts              # React Router config
│   └── styles/                    # CSS files
├── package.json
├── vite.config.ts
└── README.md
```

## 🛠 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Motion (Framer Motion)** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons
- **Vite** - Build tool

## 📦 Building for Production

```bash
# Build the project
pnpm run build

# Preview the production build locally
npx serve dist
```

## 🎯 Features to Customize

- [ ] Replace "Your Name" with your actual name
- [ ] Update GitHub and LinkedIn links
- [ ] Add your profile picture (already included)
- [ ] Customize projects with your real work
- [ ] Update contact information
- [ ] Modify resume content
- [ ] Adjust stats and metrics
- [ ] Add your own color scheme if desired

## 📄 License

This portfolio template is free to use for personal and commercial projects.

## 🤝 Support

If you have questions or need help customizing, feel free to open an issue!

---

**Happy Building! 🚀**
