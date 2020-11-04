// 11.4.20
//  check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.
// Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.
// JS solution:
function solve(s) {
  if (s.length === 1) {
    return true;
  }

  const sortedChars = s.split("").sort().join("");

  for (let i = 1; i < sortedChars.length; i++) {
    if (sortedChars.charCodeAt(i) - sortedChars.charCodeAt(i - 1) !== 1) {
      return false;
    }
  }

  return true;
}
// JS solution (condensed)
function solve(s) {
  return "abcdefghijklmnopqrstuvwxyz".includes([...s].sort().join(""));
}
