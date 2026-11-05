<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/bf796d4f-001f-400c-a303-f5980eb5dd23

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deployment

### Vercel Native Deployment
Deploy seamlessly using the official Vercel CLI or by importing this repository directly into Vercel:
```bash
# Preview build locally
npm run build:vercel

# Deploy directly via Vercel CLI
npx vercel deploy --prod
```
The project includes a native `vercel.json` and `@vercel/analytics` / `@vercel/speed-insights` integration.

### Cloudflare Wrangler Native Deployment
Deploy natively to Cloudflare Workers using OpenNext and Wrangler:
```bash
# Build with OpenNext adapter for Cloudflare
npm run build:cloudflare

# Preview locally in the Cloudflare workerd runtime
npm run preview:cloudflare

# Deploy to Cloudflare Workers
npm run deploy:cloudflare
# or: npx wrangler deploy
```
Configurations are defined in `wrangler.json`, `wrangler.toml`, and `open-next.config.ts`.

