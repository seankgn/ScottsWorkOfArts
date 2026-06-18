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

The form posts to [FormSubmit](https://formsubmit.co) (`formsubmit.co/ajax/donald@scottsworkofartsllc.com`). Free, no account needed.

**One-time activation, still pending:** the first submission from the live site triggers an email to donald@scottsworkofartsllc.com with an "Activate Form" link. Until he clicks it, submissions are held. To finish: submit the form once on the live site, have Scott click the activation link, then submit again to confirm it arrives in his inbox.

## Remaining launch checklist

1. Activate the quote form (see above).
2. **Email migration** (in progress). The site still uses `donald@scottsworkofartsllc.com` (a GoDaddy mailbox), which still works. To finish moving to the branded address:
   - Activate Porkbun Hosted Email for `donald@scottsworkofarts.com` (Porkbun auto-adds MX + SPF/DKIM so sending is authenticated).
   - Swap the 5 site references from `donald@scottsworkofartsllc.com` to `donald@scottsworkofarts.com` (`index.html` JSON-LD, contact card, both footers, and the FormSubmit endpoint in `js/main.js`), then re-activate FormSubmit for the new address.
   - Only then retire the old domains: redirect or let lapse `scottsworksofart.com` (Cloudflare) and `scottsworkofartsllc.com` (GoDaddy) — first confirm the `…llc.com` address isn't a login/recovery email on any account, and notify the few contacts who have it.
3. Set up a Google Business Profile with Scott (service-area business covering Ocoee, Winter Garden, Windermere, Apopka) using the live URL as the website.

## Updating content

Everything customers see is in `index.html`. Services, phone number, email, and text are all plain HTML. Edit, commit, push to `main`; Pages redeploys automatically.
