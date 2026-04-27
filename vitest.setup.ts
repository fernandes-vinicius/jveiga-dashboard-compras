import "@testing-library/jest-dom/vitest";

// jsdom nao implementa matchMedia; necessário pro hook `useIsMobile`.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    };
  },
});

// Radix usa Pointer Capture APIs que nao existem no jsdom por padrão.
if (!Element.prototype.hasPointerCapture) {
  // biome-ignore lint/suspicious/noExplicitAny: test polyfill
  (Element.prototype as any).hasPointerCapture = () => false;
}
if (!Element.prototype.setPointerCapture) {
  // biome-ignore lint/suspicious/noExplicitAny: test polyfill
  (Element.prototype as any).setPointerCapture = () => {};
}
if (!Element.prototype.releasePointerCapture) {
  // biome-ignore lint/suspicious/noExplicitAny: test polyfill
  (Element.prototype as any).releasePointerCapture = () => {};
}

if (!Element.prototype.scrollIntoView) {
  // biome-ignore lint/suspicious/noExplicitAny: test polyfill
  (Element.prototype as any).scrollIntoView = () => {};
}
