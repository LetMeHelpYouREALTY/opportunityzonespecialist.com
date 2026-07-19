# Opportunity Zone Specialist

Next.js 15 realtor site for **Dr. Jan Duffy** at Berkshire Hathaway HomeServices Nevada Properties — Opportunity Zone & Las Vegas Valley focus.

Live domain: [opportunityzonespecialist.com](https://www.opportunityzonespecialist.com)

## Stack

- Next.js 15 App Router, React 19, TypeScript, Tailwind CSS
- RealScout web components (`em.realscout.com` + `www.realscout.com` in CSP)
- Cloudinary images, Google Maps / open-houses embed via env
- Deployed on Vercel

## Local development

```bash
npm install
cp .env.example .env.local
# fill NEXT_PUBLIC_* values from Vercel
npm run dev
```

Or use `vercel dev` / `vercel build` when the Vercel CLI is linked.

## Required env (v1)

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_REALSCOUT_AGENT_ID` | RealScout agent encoded id |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Hero / media images |
| `CLOUDINARY_FOLDER` | Optional folder prefix |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Office map embed fallback |
| `NEXT_PUBLIC_OPEN_HOUSES_MAP_EMBED_URL` | Preferred map iframe URL |

Deferred (reserved, not required for pages): `openaikey`, `NOTION_TOKEN`, `CLOUDFLARE_API_TOKEN`, `SMS_*`.

## NAP (must match GBP)

- **Name:** Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties  
- **Address:** 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134  
- **Phone (client CTA):** (702) 222-1964  
- **License:** S.0197614.LLC  

## RealScout

Script loads once in `app/layout.tsx` via `RealScoutScript`. Widgets use `dangerouslySetInnerHTML` custom elements — do not load the script multiple times or drive widgets with React state.
