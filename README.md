# Opportunity Zone Specialist

Next.js 15 realtor site for **Dr. Jan Duffy** at Berkshire Hathaway HomeServices Nevada Properties — Opportunity Zone & Las Vegas Valley focus.

Live domain: [opportunityzonespecialist.com](https://www.opportunityzonespecialist.com)

## Stack

- Next.js 15 App Router, React 19, TypeScript, Tailwind CSS
- RealScout web components (`em.realscout.com` + `www.realscout.com` in CSP)
- Cloudinary images, Google Maps / open-houses embed via env
- Deployed on Vercel

## Status: Next.js in production

This repo is **Next.js 15 App Router**. Production cutover is complete:

| Surface | What it serves |
|---------|----------------|
| GitHub `main` | Next.js source |
| Vercel project `opportunityzonespecialist-com` | Connected to this GitHub repo (`productionBranch: main`) |
| https://www.opportunityzonespecialist.com | Next.js (custom domain on the same project) |
| https://opportunityzonespecialist.com | 301 → www |

`git push` to `main` triggers a Vercel production deployment via the GitHub integration.

## Local development

```bash
npm install
cp .env.example .env.local
# fill NEXT_PUBLIC_* values from Vercel
npm run dev
```

Or use `vercel dev` / `vercel build` when the Vercel CLI is linked.

## Google Search Console

Site is prepared for GSC on the Next.js app:

| Asset | URL / location |
|-------|----------------|
| Sitemap | `/sitemap.xml` (all marketing + neighborhood URLs) |
| Robots | `/robots.txt` (allows Googlebot; points at sitemap) |
| Canonicals | Every page via `buildPageMetadata` / root layout |
| Schema | LocalBusiness + WebSite + FAQ JSON-LD |
| Indexing | `robots.index/follow` + `googleBot` max-image-preview |

### Verify ownership (pick one)

**A. HTML meta tag (recommended once Next is on the custom domain)**  
1. In GSC → Add property → URL prefix `https://www.opportunityzonespecialist.com` (or Domain property)  
2. Choose **HTML tag** verification → copy the `content` token  
3. Set Vercel env `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<token>` on project `opportunityzonespecialist-com`  
4. Redeploy → View source on homepage → confirm `<meta name="google-site-verification" …>`  
5. Click **Verify** in GSC  

**B. HTML file**  
Drop Google’s `googleXXXX.html` into `/public` and redeploy (see `public/google-site-verification.README.txt`).

**C. DNS TXT (Domain property)**  
Add Google’s TXT at your DNS host; no code change required.

### After verify

1. **Sitemaps** → submit `https://www.opportunityzonespecialist.com/sitemap.xml`  
2. **URL Inspection** → test homepage + `/cities/las-vegas-nevada`  
3. Confirm the custom domain serves **Next.js** (not Astro) before relying on GSC coverage — see cutover steps above  

Optional: `NEXT_PUBLIC_BING_SITE_VERIFICATION` for Bing Webmaster Tools.

## Required env (v1)

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_REALSCOUT_AGENT_ID` | RealScout agent encoded id |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Hero / media images |
| `CLOUDINARY_FOLDER` | Optional folder prefix |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Office map embed fallback |
| `NEXT_PUBLIC_OPEN_HOUSES_MAP_EMBED_URL` | Preferred map iframe URL |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | GSC meta tag token (content= only) |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Optional Bing Webmaster token |

Deferred (reserved, not required for pages): `openaikey`, `NOTION_TOKEN`, `CLOUDFLARE_API_TOKEN`, `SMS_*`.

## NAP (must match GBP)

- **Name:** Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties  
- **Address:** 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134  
- **Phone (client CTA):** (702) 222-1964  
- **License:** S.0197614.LLC  

## RealScout

Script loads once in `app/layout.tsx` via `RealScoutScript`. Widgets use `dangerouslySetInnerHTML` custom elements — do not load the script multiple times or drive widgets with React state.
