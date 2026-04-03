# Sasha Smith Website

Personal website built with [Eleventy (11ty)](https://www.11ty.dev/) and deployed on Netlify.

## Stack

- Static site generator: `@11ty/eleventy` (v3)
- Templating: Nunjucks + Markdown
- Plugin: `@11ty/eleventy-img`
- Plugin: `@11ty/eleventy-navigation`
- Plugin: `eleventy-plugin-youtube-embed`
- Runtime: Node.js (LTS recommended)

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start local dev server:
```bash
npm run dev
```

3. Open:
```text
http://localhost:8080
```

## Scripts

- `npm run dev`  
  Runs Eleventy in serve/watch mode:
  `npx @11ty/eleventy --serve`

- `npm run build`  
  Builds the static site:
  `npx @11ty/eleventy`

## Build Output

- Input directory: `src/`
- Output directory: `public/`
- Config file: `.eleventy.js`

## Content Structure

Main content lives in `src/`:

- `src/now/` -> now updates
- `src/music/singles/` -> single release pages
- `src/music/eps/` -> EP pages
- `src/essays/` -> essays
- `src/poems/` -> poems
- `src/book-notes/` -> book notes
- `src/paintings/` -> paintings
- `src/newsletters/` -> newsletter issues
- `src/_includes/` -> layouts, snippets, partials
- `src/_data/` -> site data/config
- `src/styles/` and `src/assets/` -> passthrough static files

## URL & Linking Conventions

Use Eleventy URL filters in Markdown/Nunjucks for internal links:

```md
[In the End It Comes]({{ '/iteic/' | url }})
```

Why this pattern:
- Keeps links consistent if URL handling changes.
- Matches the site-wide convention already used in content.

## Now Updates

`src/now/` uses computed metadata from `src/now/now.11tydata.js`:

- Permalink is derived from filename date.
- Example file: `src/now/2026-02-16.md`
- Output URL: `/2026-02-16/`
- Title is generated from filename date (e.g. `Feb 16, 2026`).

## Collections (Configured in `.eleventy.js`)

- `essays` (sorted by `order`)
- `poems` (sorted by `date`)
- `booknotes` (sorted by `dateRead`)
- `paintings` (sorted by `dateEnded`)
- `newsletters` (sorted by `date`)
- `now` (sorted by `date`)
- `music` (combined singles + EPs, sorted by `date`)

## Custom Filters & Shortcodes

Filters:
- `markdownify`
- `year`
- `readableDate`
- `readDate`
- `yearSimple`

Shortcodes:
- `accordionItem` (paired)
- `myAge`
- `yearsSince2015`

## Deployment Notes (Netlify)

Typical settings:

- Build command: `npm run build`
- Publish directory: `public`

If Netlify is already connected, pushes to the configured branch should trigger deploys automatically.

## Common Troubleshooting

- Port already in use on `npm run dev`:
  Stop other dev servers and rerun.
- Missing module errors:
  Run `npm install`.
- Link appears broken:
  Confirm the target page permalink exists, then verify link syntax uses `{{ '/path/' | url }}`.

## Project Maintenance Tips

- Keep permalinks explicit in front matter for durable URLs.
- Prefer internal links with the `| url` filter.
- For future releases, it is fine to pre-link planned pages before files are created, then add those files when ready.
