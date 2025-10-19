// Solution: 02 — DOM manipulation
function updateCounter(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  const n = parseInt(el.textContent, 10);
  if (Number.isNaN(n)) {
    el.textContent = '1';
  } else {
    el.textContent = String(n + 1);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { updateCounter };
}
