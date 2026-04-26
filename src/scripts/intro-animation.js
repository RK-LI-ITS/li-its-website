const intro = document.getElementById('intro');
const INTRO_DURATION_MS = 7000;
const CLICK_GRACE_MS = 1500;

function dismissIntro() {
  if (!intro || intro.classList.contains('dismissed')) return;
  intro.classList.add('dismissed');
  document.body.classList.add('intro-done');
  setTimeout(() => {
    intro.style.display = 'none';
  }, 700);
}

if (intro) {
  const skipViaQuery = new URLSearchParams(location.search).has('skip_intro');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (skipViaQuery || reducedMotion) {
    dismissIntro();
  } else {
    setTimeout(dismissIntro, INTRO_DURATION_MS);
    setTimeout(() => {
      intro.addEventListener('click', dismissIntro);
    }, CLICK_GRACE_MS);
  }
}
