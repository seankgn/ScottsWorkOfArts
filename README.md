# Scott's Work of Arts

One-page website for Scott's Work of Arts — property maintenance & landscaping based in Ocoee, FL, serving West Orange County.
"Simple the Better" — call (407) 558-1006 for a free quote.

## Structure

- `index.html` — the whole site (hero, services, why us, contact)
- `css/style.css` — all styling (green brand palette from the business card)
- `js/main.js` — mobile menu toggle + footer year
- `img/favicon.svg` — browser tab icon
- `.claude/serve.ps1` — tiny local preview server (no Node/Python needed)

## Preview locally

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .claude/serve.ps1 -Port 4173
```

Then open http://localhost:4173/

## Deploy (free)

**GitHub Pages** (easiest since this repo is on GitHub):
1. Push to GitHub.
2. Repo → Settings → Pages → Source: "Deploy from a branch" → branch `main`, folder `/ (root)`.
3. Site goes live at `https://<username>.github.io/ScottsWorkOfArts/` within a minute or two.

**Netlify** (alternative): drag-and-drop this folder at https://app.netlify.com/drop — instant live URL.

A custom domain (e.g. `scottsworkofarts.com`, ~$12/yr) can be pointed at either host later.

## Quote request form

The form posts to [FormSubmit](https://formsubmit.co) (`formsubmit.co/ajax/Scottsworkofarts@gmail.com`) — free, no account needed.
**One-time activation:** the first time someone submits the form on the live site, FormSubmit emails Scott's Gmail an
"Activate Form" link. Until he clicks it, submissions are held. So after deploying: submit the form once yourself,
have Scott click the activation link, then submit again to confirm it arrives.

## Updating content

Everything customers see is in `index.html` — services, phone number, email, and text are all plain HTML. Edit, commit, push; Pages redeploys automatically.
