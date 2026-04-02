export interface RevealOptions {
  threshold?: number;
  delay?: number;
  duration?: number;
  y?: number;
}

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
  const { threshold = 0.1, delay = 0, duration = 600, y = 20 } = options;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return {};
  }

  node.style.opacity = '0';
  node.style.transform = `translateY(${y}px)`;
  node.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
  node.style.transitionDelay = `${delay}ms`;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.style.opacity = '1';
        node.style.transform = 'translateY(0)';
        observer.unobserve(node);
      }
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
