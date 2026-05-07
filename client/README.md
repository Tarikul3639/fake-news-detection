# FakeGuard — Fake News Detector

Next.js + TypeScript + Tailwind CSS frontend for the Fake News Detection ML project.

## File Structure

```
src/app/
├── page.tsx                    # Main page
├── layout.tsx                  # Root layout
├── globals.css                 # Tailwind imports + custom animations
└── components/
    ├── Header.tsx              # Logo + title section
    ├── TextInput.tsx           # Textarea + Analyze/Clear buttons
    ├── ResultCard.tsx          # FAKE/REAL result with confidence bar
    ├── ExampleChips.tsx        # Sample article buttons
    └── ApiNote.tsx             # Backend connection info
```

## Setup

```bash
# 1. Create Next.js project
npx create-next-app@latest fake-news-detector --typescript --tailwind --app

# 2. Copy these files into src/app/

# 3. Run frontend
npm run dev
```

## Connect Python Backend

```bash
# Install FastAPI
pip install fastapi uvicorn

# Run API (api.py must be in your project root)
uvicorn api:app --reload --port 8000
```

The app works in **demo mode** without the backend.
Once `uvicorn` is running, it automatically switches to real ML predictions.

## Features

- Real-time character + word counter
- Animated confidence bar
- 3 example articles (fake + real + political)
- Demo mode fallback (no backend needed)
- Loading skeleton animation
- Fully typed with TypeScript