const palindrome = require("../utils/for_testing").palindrome;

test("palindrome of a", () => {
  const result = palindrome("a");

  expect(result).toBe("a");
});
