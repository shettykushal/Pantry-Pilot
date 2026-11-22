# PantryPilot

**Your ingredients. Your creativity. Zero waste.**

A Next.js AI cooking assistant for students and everyday kitchens.

## Features
- Streaming AI cooking chat with pantry context and dietary preferences
- Fridge Rescue: scan up to four ingredient photos with OpenAI vision, confirm and edit detections
- Local pantry inventory: quantity, use-by date, leftovers, photo/manual provenance
- Three AI recipe suggestions with estimated INR costs, missing ingredients, steps and substitutions
- Student Budget Mode (₹30/₹50/₹100 quick presets)
- 1–3-day zero-waste meal planning with shopping list
- Guided step-by-step Cooking Mode
- Saved recipes and preferences in browser localStorage

## Run locally
1. Install Node.js 20+ and run `npm install`.
2. Copy `.env.example` to `.env.local` and set `OPENAI_API_KEY` to your real key.
3. Run `npm run dev` and open http://localhost:3000.
4. Run `npm run build` to check production compilation.

## Deploy to Vercel
1. Push these files to a new GitHub repository (do **not** commit `.env.local`).
2. Open your existing `pantrypilot` project in Vercel and connect the repository under **Settings → Git** (or import the repository as a new project if needed).
3. Set `OPENAI_API_KEY` and optionally `OPENAI_MODEL` under **Settings → Environment Variables** for Production and Preview.
4. Deploy / redeploy, then open the deployment URL provided by Vercel.

## Security and limitations
- API keys are only read on the server. AI routes validate requests with Zod and use basic in-memory rate limiting (not distributed; replace with Redis/Upstash for production abuse protection).
- Uploaded images are validated for type and size; they are sent to OpenAI for inference and are not stored by this app.
- Browser localStorage is used for persistence. Data is per browser/device, not synced. Optional Supabase persistence is **not implemented**.
- Cost and quantity estimates are approximate, not live market prices. Vision cannot establish food safety or freshness.
- AI calls require a funded OpenAI API account; ChatGPT subscriptions do not include API credits.
- The AI assistant streams chat text; recipe, meal-plan and scan endpoints return validated structured results.
