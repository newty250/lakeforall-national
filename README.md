# Lake For All — National Site

National website for the **Lake For All** grassroots movement advocating for public lake access and the preservation of all watersports on public lakes across the United States.

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — navy `#1B3A6B` / sky blue `#4A9FD4` visual identity
- **Anthropic API** (`claude-haiku-4-5` + web search) — AI news curation
- **Vercel KV** — persists AI-curated news between cron runs
- **react-simple-maps** — interactive US chapter map
- **Resend** — transactional email for chapter applications
- **Vercel** — hosting + daily cron job

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Fill in your values (see below)

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Required | Description |
|---|---|---|
| `ANTHROPIC_API_KEY` | Yes | Anthropic API key for AI news curation |
| `KV_URL` | Recommended | Vercel KV connection URL |
| `KV_REST_API_URL` | Recommended | Vercel KV REST API URL |
| `KV_REST_API_TOKEN` | Recommended | Vercel KV REST API token |
| `KV_REST_API_READ_ONLY_TOKEN` | Recommended | Vercel KV read-only token |
| `CONTACT_EMAIL` | Yes | Recipient for chapter applications |
| `RESEND_API_KEY` | Recommended | Resend API key for email delivery |
| `CRON_SECRET` | Yes | Auth secret for the cron endpoint |

**Without Vercel KV:** The news page displays built-in mock articles.  
**Without Resend:** Chapter applications are logged to console but not emailed.

## Vercel KV Setup

1. In your Vercel project, go to **Storage → Create Database → KV**
2. Link it to your project — environment variables are added automatically
3. Copy them to `.env.local` for local development

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, stats, WAVE program, news preview, chapters preview |
| `/why-lakes-matter` | Data-driven advocacy page with statistics and case studies |
| `/chapters` | US map, chapter directory, Start a Chapter form |
| `/news` | AI-curated news feed (refreshed daily) |
| `/shop` | Merchandise store (Coming Soon + waitlist) |
| `/donate` | Donation tiers, monthly giving, Open Collective link |
| `/about` | Origin story, timeline, values, leadership |

## API Routes

| Route | Description |
|---|---|
| `GET /api/news` | Returns stored news articles (from KV or mock) |
| `GET /api/cron/news` | Cron endpoint — fetches fresh news from AI and stores to KV |
| `POST /api/chapters` | Receives chapter applications and sends email |

## Daily News Cron

The `vercel.json` configures a cron job that hits `/api/cron/news` every day at 8 AM UTC:

```json
{
  "crons": [{ "path": "/api/cron/news", "schedule": "0 8 * * *" }]
}
```

The endpoint uses `claude-haiku-4-5` with the web search tool to find recent lake access news and stores results in Vercel KV. To test manually:

```bash
curl -H "Authorization: Bearer YOUR_CRON_SECRET" https://your-site.vercel.app/api/cron/news
```

## Adding a Chapter

1. Add the chapter to `src/lib/chapters.ts` with its coordinates
2. The chapter card and map pin appear automatically on `/chapters`

## Deployment

```bash
# Deploy to Vercel
npx vercel

# Or connect your GitHub repo in the Vercel dashboard
# Set environment variables in Project Settings → Environment Variables
```

The daily cron job runs automatically on Vercel's infrastructure after deployment.

## Visual Identity

- **Navy:** `#1B3A6B`
- **Sky Blue:** `#4A9FD4`
- **White:** `#FFFFFF`
- Font: Inter (Google Fonts)
- Inspired by Surfrider Foundation's clean coastal aesthetic
