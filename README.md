# 🕉 Gita Visual Guide

**See the Wisdom** — Interactive visual models of Bhagavad Gita teachings across all 18 chapters.

## What's Inside

- **17 chapters** (Ch 2–18) with **90 visual models**
- **6 visual template types**: Comparison, Flow, Cycle, Radial, Hierarchy, Grid
- **Sanskrit verses** with English translations for every model
- **Dark spiritual theme** with saffron accents
- **Fully responsive** — works on mobile, tablet, and desktop
- **Zero backend** — pure static site, no API keys needed

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to Vercel (Free)

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub + Vercel
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project" → select your repo
4. Framework: **Vite** (auto-detected)
5. Click Deploy ✓

Your site will be live at `your-project.vercel.app` in ~60 seconds.

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- No external runtime dependencies

## Project Structure

```
src/
  data/gitaData.js    ← All 90 models, verses, and chapter data
  App.jsx             ← Main app with all 6 visual templates
  main.jsx            ← Entry point
  index.css           ← Tailwind + custom styles
```

## Adding New Models

Edit `src/data/gitaData.js`. Each model needs:

```js
{
  id: "ch2-example",          // Unique ID
  name: "Model Name",          // Display title
  desc: "Description (verse refs).",
  type: "comparison",          // comparison | flow | cycle | radial | hierarchy | grid
  data: { /* template-specific */ },
  scriptures: [
    { ref: "2.47", sanskrit: "...", text: "English translation" }
  ]
}
```

---

Built with devotion. Based on Srimad Bhagavad Gita.
