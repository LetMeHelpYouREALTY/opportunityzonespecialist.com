# Opportunity Zone Specialist

Next.js 15 realtor site for **Dr. Jan Duffy** at Berkshire Hathaway HomeServices Nevada Properties — Opportunity Zone & Las Vegas Valley focus.

Live domain: [opportunityzonespecialist.com](https://www.opportunityzonespecialist.com)

## Stack

- Next.js 15 App Router, React 19, TypeScript, Tailwind CSS
- RealScout web components (`em.realscout.com` + `www.realscout.com` in CSP)
- Cloudinary images, Google Maps / open-houses embed via env
- Deployed on Vercel

## Status: already Next.js

This repo is **Next.js 15 App Router** (not Astro). There is no Astro source left to convert.

| Surface | What it serves |
|---------|----------------|
| GitHub `main` | Next.js (current) |
| https://opportunityzonespecialist-com.vercel.app | Next.js project `opportunityzonespecialist-com` |
| https://www.opportunityzonespecialist.com | **Still old Astro** (different Vercel project; `last-modified: Jul 2, 2026`) |

### Why `git push` does not deploy

Project **`opportunityzonespecialist-com`** (`prj_OPeHlqAs7VKjCibR3xLONmQm2LbW`) has **no GitHub connection**. Recent production deploys are CLI/MCP uploads, not commits from `main`. Pushing to GitHub therefore does not create a Vercel deployment.

### Finish production cutover (do this in Vercel UI)

1. Open [opportunityzonespecialist-com](https://vercel.com/janet-duffys-projects/opportunityzonespecialist-com) → **Settings → Git** → connect `LetMeHelpYouREALTY/opportunityzonespecialist.com`, production branch `main`
2. **Settings → Domains** → add `opportunityzonespecialist.com` and `www.opportunityzonespecialist.com`
3. Remove those domains from the **old Astro** Vercel project (otherwise assignment fails)
4. Copy env vars (`NEXT_PUBLIC_REALSCOUT_AGENT_ID`, Cloudinary, Maps, Calendly, etc.)
5. Optional fallback: add GitHub Actions secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID` (`team_EIbjFXaDDtGMTweb5Hvo3CG3`), `VERCEL_PROJECT_ID` (`prj_OPeHlqAs7VKjCibR3xLONmQm2LbW`) so `.github/workflows/vercel-production.yml` can deploy on push

Until step 2–3 are done, the public domain will keep showing Astro even though Next.js is live on `*.vercel.app`.

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
