// ─────────────────────────────────────────
// Video modal — revealed after form submission
// ─────────────────────────────────────────
//
// Trigger: in JotForm, set the Thank-You action to
//   "Redirect to an external link after submission"
//   → this page's URL with a ?watch=1 flag, e.g.
//     https://thoughtworks-rea-group.researchnxt.com/?watch=1
//
// JotForm navigates the top window (same as the old PDF redirect), the
// page reloads with the flag, and this script pops the modal automatically.
// You can also open it manually anytime via window.openVideoModal().

const WISTIA_ID = 'vljwva6dhy';
const WATCH_PARAM = 'watch';

const modal = document.getElementById('videoModal');
const mount = document.getElementById('videoFrameMount');

function openVideoModal() {
  if (!modal || modal.classList.contains('is-open')) return;

  // Lazy-build the iframe so the video only loads (and autoplays) on open.
  mount.innerHTML =
    `<iframe src="https://fast.wistia.net/embed/iframe/${WISTIA_ID}?autoPlay=true"` +
    ` title="Wistia video player" allow="autoplay; fullscreen"` +
    ` allowtransparency="true" allowfullscreen frameborder="0" scrolling="no"></iframe>`;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  mount.innerHTML = '';          // unload the iframe to stop playback
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
}

// Expose for manual triggering / testing.
window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;

// Close interactions: backdrop, close button, Escape.
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) closeVideoModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideoModal();
  });
}

// Auto-open if redirected back with the watch flag, then clean the URL
// so a refresh doesn't reopen the modal.
const params = new URLSearchParams(window.location.search);
if (params.get(WATCH_PARAM) || window.location.hash === '#watch') {
  openVideoModal();
  params.delete(WATCH_PARAM);
  const clean = window.location.pathname + (params.toString() ? `?${params}` : '');
  window.history.replaceState(null, '', clean);
}
