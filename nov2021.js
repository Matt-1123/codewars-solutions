// 11/5/21
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
const array = (arr) => arr.split(",").slice(1, -1).join(" ") || null;

// 11/6/21
// Given an integral number, determine if it's a square number:
const isSquare = (n) => Number.isInteger(Math.sqrt(n));

// sPoNgEbOb MeMe
const spongeMeme = (sentence) =>
  sentence
    .split("")
    .map((ltr, i) => (i % 2 === 0 ? ltr.toUpperCase() : ltr.toLowerCase()))
    .join("");
