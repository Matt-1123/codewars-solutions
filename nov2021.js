// 11/5/21
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
const array = (arr) => arr.split(",").slice(1, -1).join(" ") || null;
