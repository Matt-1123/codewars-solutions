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

// Find the sum of an array of numbers
const sum = numbers => numbers.reduce((total, num) => {
  return total + num;
}, 0);

// Mumbling (7kyu)
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// My solution:
function accum(s) {
  let result = '';
  for(let i = 0; i < s.length; i++){
    let letterStr = s[i].toUpperCase();
    letterStr += s[i].toLowerCase().repeat(i);
    if(i !== s.length - 1){
      letterStr += "-";
    }
    result += letterStr;
  }
  return result;
}
// Best practice solution:
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
