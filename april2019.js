// Thinkful - String Drills: Repeater (7kyu)
/* Write a function named repeater() that takes two arguments (a string and a number), 
and returns a new string where the input string is repeated that many times. */
const repeater = (string, n) => string.repeat(n);

// WED 4/17/19
// Find the integer in an array that appears an odd number of times
const findOdd = ints => {
  let obj = {};
  ints.forEach(el => obj[el] ? obj[el]++ : obj[el] = 1);
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}