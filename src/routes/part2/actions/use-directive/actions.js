/**
 * @param {HTMLElement} node
 */
export function trapFocus(node) {
  const previous = document.activeElement;

  /**
   * @returns {HTMLElement[]}
   */
  function focusable() {
    return Array.from(
      node.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    );
  }

  /**
   * @param {KeyboardEvent} event
   */
  function handleKeydown(event) {
    if (event.key !== 'Tab') return;

    const current = document.activeElement;

    const elements = focusable();
    const first = elements.at(0);
    const last = elements.at(-1);

    if (event.shiftKey && current === first && last) {
      last.focus();
      event.preventDefault();
    }

    if (!event.shiftKey && current === last && first) {
      first.focus();
      event.preventDefault();
    }
  }

  focusable()[0]?.focus();

  node.addEventListener('keydown', handleKeydown);

  return {
    destroy() {
      node.removeEventListener('keydown', handleKeydown);
      if (previous instanceof HTMLElement) previous?.focus();
    }
  };
}
