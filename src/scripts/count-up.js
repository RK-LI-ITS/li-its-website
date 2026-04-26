const DURATION_MS = 1600;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

function countUp(el) {
  const target = Number(el.dataset.target);
  const suffix = el.dataset.suffix ?? '';
  if (!Number.isFinite(target)) return;
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min(1, (now - start) / DURATION_MS);
    const value = Math.floor(easeOutCubic(progress) * target);
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target + suffix;
  };
  requestAnimationFrame(tick);
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const targets = document.querySelectorAll('.ki-stat .num[data-target]');

if (reducedMotion) {
  targets.forEach((el) => {
    el.textContent = Number(el.dataset.target) + (el.dataset.suffix ?? '');
  });
} else {
  targets.forEach((el) => {
    el.textContent = '0' + (el.dataset.suffix ?? '');
  });
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  targets.forEach((el) => observer.observe(el));
}
