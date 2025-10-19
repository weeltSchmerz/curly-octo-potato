// Solution: 01 — Hello world
function greet(name) {
  if (!name) return 'Hello, stranger!';
  return `Hello, ${name}!`;
}

// Export for tests (if using Node/Jest)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { greet };
}
