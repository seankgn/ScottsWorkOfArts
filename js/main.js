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
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/scottsworkofarts@gmail.com';

const form = document.getElementById('quote-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
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
