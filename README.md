# Economics Job Market Website

Static, GitHub Pages-ready academic job market site inspired by the simple economics profile structure at `garrettshost.com`.

## Edit Before Publishing

Replace the placeholders in `index.html`:

- `Your Name`
- `[University Name]`
- `[Advisor Name]`
- `[Office Address]`
- `your.email@university.edu`
- education and teaching entries
- paper links once drafts/slides are public

If you have a CV PDF, save it as `assets/cv.pdf`, then change the CV button in `index.html` from `href="#cv"` to `href="assets/cv.pdf"`.

If you have a headshot, add it to `assets/` and replace or supplement the current abstract research visual.

## Local Preview

Open `index.html` directly in a browser. No build step is required.

## Publish With GitHub Pages

1. Create a new GitHub repository for this website.
2. Upload the contents of this folder to the repository root.
3. In GitHub, go to `Settings` -> `Pages`.
4. Set `Build and deployment` to `Deploy from a branch`.
5. Set the branch to `main` and folder to `/root`.
6. Save.

## Add a Custom Domain

After buying a domain:

1. In GitHub Pages settings, add the domain under `Custom domain`.
2. GitHub will create a `CNAME` file, or you can create one containing only your domain, for example `yourname.com`.
3. At your domain registrar, point DNS to GitHub Pages using GitHub's current Pages DNS instructions.
4. Enable `Enforce HTTPS` once DNS is verified.

Do not commit a fake `CNAME` before you own the domain.
