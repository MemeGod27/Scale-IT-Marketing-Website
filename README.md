# Scale It Marketing — React + Tailwind Landing (Deployable)

This is a ready-to-deploy **Vite + React + Tailwind CSS** landing page for *Scale It Marketing*. It includes a dark/light theme toggle, responsive layout, and placeholder logo (replace with your real logo at `src/assets/logo.svg`).

## Quick local setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## Deploy to Vercel (recommended)
1. Create a GitHub repo and push this project.
2. Go to https://vercel.com/import and import your repo.
3. Use the default build settings (Framework: Vite). If asked:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy — Vercel will provide a URL.

## Deploy to Netlify
1. Push repository to GitHub.
2. On Netlify, create a new site from Git => GitHub.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy.

## Notes
- Replace `src/assets/logo.svg` with your actual logo (SVG or PNG) to match brand colors.
- Update contact email in `src/App.jsx` if needed.
- To enable analytics or forms, integrate your provider (e.g., Netlify Forms or a backend).

---
If you want, I can:
- Push this current project to a new GitHub repo for you (I will produce the repo-ready zip and instructions on how to push), or
- Replace the placeholder logo with the logo file you uploaded (if you confirm it), or
- Add GitHub Actions to auto-deploy to Vercel on push.
