# Scott's Works of Art

One-page website for Scott's Works of Art, a property maintenance and landscaping business based in Ocoee, FL, serving West Orange County. "The simpler, the better." Call (407) 558-1006 for a free quote.

**Live site:** https://www.scottsworksofart.com

## How it's hosted

- GitHub Pages serves the `main` branch of this repo (Settings > Pages). Every push to `main` redeploys the live site automatically within a minute or two.
- The domain `scottsworksofart.com` is registered at Cloudflare. DNS: four A records on the apex pointing at GitHub Pages' IPs, plus a `www` CNAME to `seankgn.github.io`, all set to "DNS only" (grey cloud, not proxied).
- The `CNAME` file in this repo stores the custom domain setting. Don't delete it.
- HTTPS is enforced via the GitHub Pages settings.

## Structure

- `index.html`: the whole site (hero, services, why us, quote form, contact)
- `css/style.css`: all styling (green brand palette from the business card)
- `js/main.js`: mobile menu, service-card-to-form prefill, quote form submission, footer year
- `img/favicon.svg`: browser tab icon
- `.claude/serve.ps1`: tiny local preview server (this machine has no Node or Python)

## Preview locally

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .claude/serve.ps1 -Port 4173
```

Then open http://localhost:4173/

## Quote request form

The form posts to [FormSubmit](https://formsubmit.co) (`formsubmit.co/ajax/scottsworkofarts@gmail.com`). Free, no account needed.

**One-time activation, still pending:** the first submission from the live site triggers an email to Scott's Gmail with an "Activate Form" link. Until he clicks it, submissions are held. To finish: submit the form once on the live site, have Scott click the activation link, then submit again to confirm it arrives in his inbox.

## Remaining launch checklist

1. Activate the quote form (see above).
2. Register the typo domain `scottsworkofarts.com` (the spelling printed on the current business cards and flyers) and add a Cloudflare redirect rule pointing it at `scottsworksofart.com`.
3. Set up a Google Business Profile with Scott (service-area business covering Ocoee, Winter Garden, Windermere, Apopka) using the live URL as the website.
4. Later, when job photos exist: add a gallery section (compress photos first so the page stays fast).

## Updating content

Everything customers see is in `index.html`. Services, phone number, email, and text are all plain HTML. Edit, commit, push to `main`; Pages redeploys automatically.
