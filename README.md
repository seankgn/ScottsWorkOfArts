# Scott's Work of Arts

One-page website for Scott's Work of Arts, a property maintenance and landscaping business based in Ocoee, FL, serving West Orange County. "The simpler, the better." Call (407) 558-1006 for a free quote.

**Live site:** https://www.scottsworksofart.com

## How it's hosted

- GitHub Pages serves the `main` branch of this repo (Settings > Pages). Every push to `main` redeploys the live site automatically within a minute or two.
- The domain `scottsworksofart.com` is registered at Cloudflare. DNS: four A records on the apex pointing at GitHub Pages' IPs, plus a `www` CNAME to `seankgn.github.io`, all set to "DNS only" (grey cloud, not proxied).
- The `CNAME` file in this repo stores the custom domain setting. Don't delete it.
- HTTPS is enforced via the GitHub Pages settings.

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
2. Register `scottsworkofarts.com` (matches the registered business name, the printed cards, and the Gmail address) and make it the PRIMARY domain: add it in GitHub Pages settings with matching Cloudflare DNS records, then redirect `scottsworksofart.com` to it with a Cloudflare redirect rule.
3. Set up a Google Business Profile with Scott (service-area business covering Ocoee, Winter Garden, Windermere, Apopka) using the live URL as the website.

## Updating content

Everything customers see is in `index.html`. Services, phone number, email, and text are all plain HTML. Edit, commit, push to `main`; Pages redeploys automatically.
