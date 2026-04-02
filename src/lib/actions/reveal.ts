export interface RevealOptions {
  threshold?: number;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: boolean; // when true, also animate from scale(0.97) to scale(1)
}

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
  const { threshold = 0.1, delay = 0, duration = 600, y = 20, scale = false } = options;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return {};
  }

  const initialTransform = `translateY(${y}px)${scale ? ' scale(0.97)' : ''}`;
  const finalTransform = `translateY(0)${scale ? ' scale(1)' : ''}`;

  node.style.opacity = '0';
  node.style.transform = initialTransform;
  node.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
  node.style.transitionDelay = `${delay}ms`;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.style.opacity = '1';
        node.style.transform = finalTransform;
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
