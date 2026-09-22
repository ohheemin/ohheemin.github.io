# Heemin Oh — Portfolio

Personal portfolio site for **Heemin Oh (오희민)** — Robotics & Autonomous Driving Researcher, Dongguk University.

Built with React, TypeScript and SCSS, based on the open-source [react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template) by Yuji Sato.

## Run locally

```bash
npm install     # install dependencies (first time only)
npm start       # dev server at http://localhost:3000
npm run build   # production build into /build
```

## Structure

```
src/
  components/    # Main, Expertise, Timeline, Project, Contact, Navigation, Footer
  assets/
    images/      # avatar.png (placeholder) + mockXX.png project thumbnails
    styles/      # per-component SCSS
public/          # index.html, manifest.json, icons
```

Edit the section text directly in `src/components/*.tsx`.

## ⚠️ Placeholders to replace later

The content is real (from your CV), but a few things are intentionally left as dummies:

- **Project links** — AVATAR links to its GitHub repo and the patent card to its DOI; the other four still link to `#`. Replace `href="#"` in `src/components/Project.tsx` with your real repo / demo / paper URLs.
- **Project thumbnails** — real photos from your portfolio (`proj_*.jpg`), a colorized patent figure, and a generated blue card for AVATAR. Swap any of them in `src/assets/images/`.
- **Multiple photos per project** — each project is a photo carousel (one photo at a time, ‹ › arrows + dots). To add photos: drop images into `src/assets/images/`, `import` them at the top of `src/components/Project.tsx`, and append them to that project's `images={[...]}` list. The arrows, dots and `n / total` counter appear automatically once a project has 2 or more photos. (MACARON and SOOMAC already have two each as examples.)
- **LinkedIn** — the LinkedIn icon links to `#` in `Main.tsx` and `Footer.tsx`. Add your real profile URL.
- **Avatar** — `src/assets/images/avatar.png` is your profile photo (from your portfolio PDF). Swap it out anytime by replacing that file.
- **Contact form** — the form is UI-only. To make it send email, set up [EmailJS](https://www.emailjs.com/) and uncomment the block in `src/components/Contact.tsx`.

## Deploy (GitHub Pages)

1. Create a GitHub repo and push this project.
2. Update `homepage` in `package.json` to `https://<your-username>.github.io/<repo-name>`.
3. Install gh-pages (`npm install --save-dev gh-pages`) and run `npm run deploy`.

Netlify, Vercel or Render also work — just point them at `npm run build`.

---

Template © Yuji Sato (MIT). Site content © Heemin Oh.
