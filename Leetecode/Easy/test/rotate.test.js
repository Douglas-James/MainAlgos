const rotateString = require('../rotateString');

// Example 1:
// input s = "abcde", goal = "cdeab"
// output: true
test('rotateString - Example 1', () => {
  expect(rotateString("abcde", "cdeab")).toBe(true);
});

// Example 2:
// input s = "abcde", goal = "abced"
// output: false
test('rotateString - Example 2', () => {
  expect(rotateString("abcde", "abced")).toBe(false);
});
