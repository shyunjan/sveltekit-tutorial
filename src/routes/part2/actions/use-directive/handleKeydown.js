// @ts-nocheck
export async function handleKeydown(event) {
  if (event.key !== 'Tab') return;
  const node = event.currentTarget;
  // console.debug(`node.tagName = ${node.tagName}; node.className = ${node.className}`)

  const current = document.activeElement;

  const elements = Array.from(node.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
  const first = elements.at(0);
  const last = elements.at(-1)

  if (event.shiftKey && current === first && last instanceof HTMLElement) {
    last.focus();
    event.preventDefault();
  }

  if (!event.shiftKey && current === last && first instanceof HTMLElement) {
    first.focus();
    event.preventDefault();
  }
}
