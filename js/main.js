// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  const open = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

// Close the menu after tapping a link
siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Service cards link to the quote form with that service pre-selected
const serviceSelect = document.querySelector('select[name="service"]');

document.querySelectorAll('.service-card[data-service]').forEach((card) => {
  card.addEventListener('click', () => {
    serviceSelect.value = card.dataset.service;
  });
});

// Quote request form -> emails Scott via FormSubmit (no backend needed)
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/donald@scottsworkofartsllc.com';

const form = document.getElementById('quote-form');
const status = document.getElementById('form-status');

if (form) form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // simple required-field check (novalidate lets us style it ourselves)
  let valid = true;
  form.querySelectorAll('[required]').forEach((field) => {
    const empty = !field.value.trim();
    field.classList.toggle('invalid', empty);
    if (empty) valid = false;
  });
  if (!valid) {
    status.textContent = 'Please fill in your name and phone number.';
    status.className = 'form-status err';
    return;
  }

  const submitBtn = form.querySelector('.form-submit');
  submitBtn.disabled = true;
  status.textContent = 'Sending...';
  status.className = 'form-status';

  const data = Object.fromEntries(
    [...new FormData(form)].filter(([, value]) => value.trim() !== '')
  );
  data._subject = 'New quote request from the website';
  data._template = 'table';

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Request failed');
    form.reset();
    status.textContent = "Thanks! Your request was sent - we'll get back to you shortly.";
    status.className = 'form-status ok';
  } catch (err) {
    status.textContent = 'Something went wrong. Please call us at (407) 558-1006 instead.';
    status.className = 'form-status err';
  } finally {
    submitBtn.disabled = false;
  }
});

// Lightbox for gallery tiles and before/after photos
const items = Array.from(document.querySelectorAll('.gal-item, .ba-img'));
const lightbox = document.getElementById('lightbox');

if (items.length && lightbox) {
  const stage = document.getElementById('lb-stage');
  let current = 0;

  const render = (i) => {
    current = (i + items.length) % items.length;
    const el = items[current];
    stage.innerHTML = '';
    if (el.dataset.video) {
      const v = document.createElement('video');
      v.src = el.dataset.video;
      v.poster = el.dataset.poster || '';
      v.controls = true;
      v.autoplay = true;
      v.playsInline = true;
      stage.appendChild(v);
    } else {
      const img = document.createElement('img');
      img.src = el.dataset.full;
      img.alt = el.dataset.cap || '';
      stage.appendChild(img);
    }
  };

  const open = (i) => {
    render(i);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    stage.innerHTML = ''; // stops any playing video
  };

  items.forEach((el, i) => {
    el.addEventListener('click', () => open(i));
    if (el.tagName !== 'BUTTON') {
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); }
      });
    }
  });
  document.getElementById('lb-close').addEventListener('click', close);
  document.getElementById('lb-next').addEventListener('click', () => render(current + 1));
  document.getElementById('lb-prev').addEventListener('click', () => render(current - 1));

  // Click the dark backdrop (not the image/controls) to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') render(current + 1);
    else if (e.key === 'ArrowLeft') render(current - 1);
  });
}
