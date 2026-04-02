export interface CountUpOptions {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function countUp(node: HTMLElement, options: CountUpOptions) {
  const { target, duration = 1500, suffix = '', prefix = '' } = options;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    node.textContent = `${prefix}${target}${suffix}`;
    return {};
  }

  node.textContent = `${prefix}0${suffix}`;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animate();
        observer.unobserve(node);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(node);

  function animate() {
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for a smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      node.textContent = `${prefix}${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
