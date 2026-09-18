# Harshit Raman — Portfolio

A personal portfolio site built with Next.js, TypeScript, and Tailwind CSS,
targeting Data Analyst / BI Analyst / Business Analyst roles.

## Design concept

The site is styled as a "field report" — the same kind of document Harshit
produces professionally (multi-college enrollment reports for state
education bodies) — rather than a generic developer-portfolio template.
Numbered chapters, a ledger-style proof table, and a real data funnel chart
(built from an actual Bihar SBTE report) carry the content instead of
stock stat cards or icon grids.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building for production

```bash
npm run build
```

This produces a static export in `/out` (configured via `output: "export"`
in `next.config.js`), which works on both Vercel and GitHub Pages.

## Deploying

### Vercel (recommended, zero config)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Deploy — no configuration needed.

### GitHub Pages

1. In `next.config.js`, uncomment and set `basePath`/`assetPrefix` to your
   repository name (e.g. `/portfolio`) if the site will live at
   `username.github.io/portfolio` rather than a custom domain.
2. Run `npm run build` — this creates the static `/out` folder.
3. Deploy `/out` to the `gh-pages` branch (e.g. using the
   `gh-pages` npm package, or a GitHub Action).

## Content policy

Every number, project, and claim on this site reflects real, verified work —
nothing is fabricated. The "Currently building" section on the site itself
lists skill areas that are genuinely still in progress (advanced SQL,
pipeline automation, cloud data warehousing) rather than overstating them.

## Structure

```
app/
  layout.tsx      — fonts, metadata, SEO
  page.tsx         — assembles all sections
  globals.css      — base styles, reduced-motion support
components/
  Nav.tsx
  Hero.tsx         — cover: positioning + real-numbers ledger
  Experience.tsx   — Chapter 01
  Projects.tsx     — Chapter 02: case studies + real funnel chart
  FunnelChart.tsx  — Bihar SBTE Enrolled → Active → Certified chart
  Skills.tsx       — Chapter 03: capabilities by category
  Roadmap.tsx      — Chapter 04: honest in-progress skills
  Education.tsx    — Chapter 05
  Footer.tsx       — contact
```

## Updating content

All copy lives directly in the component files above — there is no CMS or
database. To update a project, number, or bio detail, edit the relevant
component and redeploy.

## Next steps recommended alongside this site

1. Build a dedicated SQL project (CTEs, window functions, subqueries) on
   enrollment-funnel-shaped data.
2. Automate the current manual monthly reporting workflow with a script,
   even on synthetic data if the real exports are confidential.
3. Add a resume PDF once ready, and link it from the footer.
4. Either rebuild `loan_pred` with a clear structure and business framing,
   or retire it — it isn't currently linked from this site.
