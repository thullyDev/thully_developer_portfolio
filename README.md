<h1 align="center">Thully Developer Portfolio</h1>

Frontend-only portfolio built with **Astro**, **React**, and **Tailwind**. Profile copy lives in `src/data/siteData.json`; projects are loaded from the public GitHub API at build time.

## Run locally

```bash
cd thully_developer_portfolio
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321`).

## Build

```bash
npm run build
npm run preview
```

## Configuration

| Variable | Required | Default |
|----------|----------|---------|
| `GITHUB_USER` | No | `thullyDev` |

Edit **`src/data/siteData.json`** to change bio, links, and images without a backend.

## Deploy

Static output (`dist/`) works on Vercel, Netlify, GitHub Pages, or any static host. No Redis, MongoDB, or API server required.
