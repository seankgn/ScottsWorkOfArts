# Scott's Work of Arts

One-page website for Scott's Work of Arts, a property maintenance and landscaping business based in Ocoee, FL, serving West Orange County. "The simpler, the better." Call (407) 558-1006 for a free quote.

**Live site:** https://scottsworkofarts.com

## How it's hosted

- GitHub Pages serves the `main` branch of this repo (Settings > Pages). Every push to `main` redeploys the live site automatically within a minute or two.
- The domain `scottsworkofarts.com` is registered at Porkbun. DNS (at Porkbun): four A records on the apex pointing at GitHub Pages' IPs (`185.199.108–111.153`), plus a `www` CNAME to `seankgn.github.io`. The bare domain is canonical; `www` 301-redirects to it.
- The `CNAME` file in this repo stores the custom domain setting (`scottsworkofarts.com`). Don't delete it.
- HTTPS is enforced via the GitHub Pages settings.
- Old domains being retired: `scottsworksofart.com` (Cloudflare) and `scottsworkofartsllc.com` (GoDaddy). See the migration checklist below.

## Structure

- `index.html`: the main page (hero, services, before/after "Our Work" section, why us, quote form, contact)
- `our-work.html`: the project gallery page (after-only photo grid), linked from the homepage "Our Work" section
- `css/style.css`: all styling (green brand palette from the business card)
- `js/main.js`: mobile menu, service-card-to-form prefill, quote form submission, footer year, and the photo lightbox (used on both pages)
- `img/gallery/`: web-optimized project photos (before/after pairs and gallery shots) plus `thumb/` versions for the grid
- `img/favicon.svg`: browser tab icon
- `.claude/serve.ps1`: tiny local preview server (this machine has no Node or Python)

## Preview locally

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .claude/serve.ps1 -Port 4173
```

Then open http://localhost:4173/

## Quote request form

The form posts to [FormSubmit](https://formsubmit.co) (`formsubmit.co/ajax/donald@scottsworkofarts.com`). Free, no account needed.

**Activated.** The form is live and confirmed delivering to donald@scottsworkofarts.com. The endpoint uses FormSubmit's token (`formsubmit.co/ajax/<token>`) rather than the naked email, so the address can't be scraped from the page source. If the address ever changes again, re-activate FormSubmit and replace the token.

## Google presence & SEO

- **Google Business Profile** — set up and verified. Service-area business (no public address; he works at customers' sites) covering Ocoee, Winter Garden, Windermere, and Apopka, with `https://scottsworkofarts.com` as the website. A duplicate listing existed and got tangled up; we're keeping one profile, filled out with the business description, categories (Landscaper + Painter, Pressure washing, Handyman, Gutter cleaning), phone, and ~10 work photos from `img/gallery/`.
- **Google Search Console** — domain property for `scottsworkofarts.com` verified (DNS TXT at Porkbun). `sitemap.xml` submitted; homepage and `/our-work` manually requested for indexing.
- **On-site SEO files** — `sitemap.xml`, `robots.txt` (points to the sitemap), and `rel="canonical"` tags on both pages all declare `scottsworkofarts.com` as canonical.
- **Domain migration in progress** — search still shows the retired `scottsworksofart.com` because Google has years of history on it and hasn't finished consolidating onto the new domain via the 301 redirect. The canonical tags + sitemap + Search Console speed this up; expect a few days to ~2 weeks. Keep the old domain's redirect alive until Google fully switches so its SEO authority transfers.

## Possible next steps

- Gather Google reviews from past customers (biggest lever for local ranking).
- Optional: Search Console "Change of Address" from the old domain to formally migrate indexing (needs the old domain verified in Search Console too).
- Optional, once a few reviews are in and the listing shows on Maps: Local Services Ads ("Google Guaranteed") — better fit for a home-services business than standard Search ads.

## Old domains (retired)

Auto-renew is off on both old domains; they 301-redirect to the live site until they lapse at end of term, then expire:
- `scottsworksofart.com` (Cloudflare) — was the original live domain.
- `scottsworkofartsllc.com` (GoDaddy) — held the old Microsoft 365 mailbox. The M365 email plan has been cancelled.

## Updating content

Everything customers see is in `index.html`. Services, phone number, email, and text are all plain HTML. Edit, commit, push to `main`; Pages redeploys automatically.
