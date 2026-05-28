// Faithful Touch Foundation website script
// Extracted from session 9da81851.

const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
const siteHeader = document.getElementById('siteHeader');
const yearEl = document.getElementById('year');
const formNote = document.getElementById('formNote');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (siteHeader) {
  const onScroll = () => {
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function handleContact(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const name = form.querySelector('[name="name"]')?.value?.trim() || 'Friend';
  const intent = form.querySelector('[name="intent"]')?.value || 'Support our work';

  if (formNote) {
    formNote.textContent = `Thanks, ${name}. We received your note about: ${intent}. Please email hello@daniel-mwangi.com if you'd like a direct reply.`;
  }

  form.reset();
  return false;
}
