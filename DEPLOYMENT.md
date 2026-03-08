# Deploying Your Portfolio to GitHub Pages

## Option 1: GitHub Pages with GitHub Actions (Recommended)

1. **Create a `.github/workflows/deploy.yml` file:**

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
        uses:ctio ans/setup-node@v4
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

2. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Push your code to the `main` branch

3. **Access your site:**
   - Your portfolio will be live at: `https://<USERNAME>.github.io/<REPO-NAME>/`

## Option 2: Manual Deployment

1. **Build your project:**
```bash
pnpm run build
```

2. **Deploy the `dist` folder to GitHub Pages:**
   - You can use the `gh-pages` package or manually push the `dist` folder to a `gh-pages` branch

3. **Using gh-pages package:**
```bash
pnpm add -D gh-pages
```

Then add this script to your `package.json`:
```json
"scripts": {
  "deploy": "pnpm run build && gh-pages -d dist"
}
```

Run deployment:
```bash
pnpm run deploy
```

## Customization

### Update your name link
In `/src/app/pages/Home.tsx`, replace:
```tsx
href="https://github.com/yourusername"
```
with your actual GitHub profile URL.

### Update personal information
- Replace "Your Name" throughout the codebase with your actual name
- Update the resume content in `/src/app/components/Layout.tsx`
- Customize project details in `/src/app/pages/Projects.tsx`

### Base URL Configuration
If deploying to a repository (not username.github.io), update `vite.config.ts`:
```ts
base: '/<REPO-NAME>/',
```

If deploying to `username.github.io`, keep:
```ts
base: './',
```

## Troubleshooting

- **404 on refresh:** This is normal for SPAs on GitHub Pages. Consider adding a 404.html that redirects to index.html.
- **Assets not loading:** Make sure your `base` path in `vite.config.ts` matches your deployment URL.
