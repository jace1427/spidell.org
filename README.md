# Personal site (Astro)

Static personal site for [justin.spidell.org](https://justin.spidell.org) — portfolio, blog, about, and contact.

## Stack

- [Astro](https://astro.build) 6
- MDX blog posts and Markdown projects (content collections)
- Tailwind CSS 4
- GitHub Pages + custom subdomain

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Project structure

- `src/content/blog/` — MDX posts
- `src/content/projects/` — Markdown project entries
- `src/pages/` — routes
- `public/CNAME` — `justin.spidell.org` for GitHub Pages

## Deploy (GitHub Pages)

1. Push this repo to GitHub (default branch `main`).
2. **Settings → Pages → Build and deployment**: Source = **GitHub Actions**.
3. After the workflow runs, **Settings → Pages → Custom domain**: `justin.spidell.org`, enable **Enforce HTTPS**.
4. At your DNS host for `spidell.org`, add:

   | Host   | Type  | Value                    |
   |--------|-------|--------------------------|
   | `justin` | CNAME | `YOUR_USER.github.io`    |

5. Wait for DNS and TLS (often 15–60 minutes).

`astro.config.mjs` sets `site: 'https://justin.spidell.org'` for canonical URLs and the sitemap.

## Redirects (apex and www)

Send root-domain traffic to the personal subdomain (301):

| Source | Target |
|--------|--------|
| `https://spidell.org` | `https://justin.spidell.org` |
| `https://www.spidell.org` | `https://justin.spidell.org` |

**Recommended:** use your registrar’s **URL forwarding** / **redirect** rules (no second site deploy). Enable HTTPS on redirect rules when offered.

**Verify after DNS propagates:**

```bash
curl -sI https://spidell.org | head -5
curl -sI https://www.spidell.org | head -5
```

Expect `301` or `302` with `Location: https://justin.spidell.org/...`.

**Netlify / Vercel alternative:** add `spidell.org` and `www.spidell.org` as alias domains and redirect to `justin.spidell.org` via host config (`_redirects` or `vercel.json`).

## Customize

- Edit copy in `src/pages/about.astro`, `contact.astro`, and `index.astro`
- Replace placeholder content in `src/content/`
- Update `Footer.astro` and social links
- Add a raster `public/og-default.png` (1200×630) if you want better social previews; SVG is used by default

## License

Private / personal — adjust as you like.
