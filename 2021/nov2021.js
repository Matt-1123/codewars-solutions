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

// 11/7/21
// Nathan drinks 0.5 litres of water per hour of cycling.
// You are given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
const litres = (time) => Math.floor(time / 2);

// 11/9/21
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
const findDifference = (a, b) => {
  const aVolume = a.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
  const bVolume = b.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
  return Math.abs(aVolume - bVolume);
};
