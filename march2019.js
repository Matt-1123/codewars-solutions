// ------ SAT 3/2/19 ------
// Printer Errors (7kyu)
function printerError(s) {
  const colors = /[^a-m]/;
  let errors = s.split('').filter(letter => letter.match(colors));
  return `${errors.length}/${s.length}`;
}
// Shorter answer:
const printerErrors = s => s.match(/[^a-m]/).length + "/" + s.length;

// ------ MON 3/4/19 ------
// Shortest Word (7kyu)
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function findShort(s) {
  let shortest = 999;
  let words = s.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < shortest) {
      shortest = words[i].length;
    }
  }
  return shortest;
}
// Shorter answer:
function findShort(s) {
  return Math.min(...s.split(' ').map(word => word.length));
}

// ------ TUES 3/5/19 ------
// String Ends With? (7kyu)
/*Complete the solution so that it returns true if the first argument(string) 
passed in ends with the 2nd argument (also a string). */
const solution = (str, ending) => str.slice(-ending.length) === ending;

// ------ FRI 3/8/19 ------
// Find Numbers Which Are Divisible By Given Number
/* Complete the function which takes two arguments and returns all numbers which are 
divisible by given divisor. First argument is an array of numbers 
and the second is the divisor. */
function divisibleBy(numbers, divisor) {
  return numbers.filter(num => num % divisor === 0);
}

// ------ MON 3/11/19 ------
// FizzBuzz Cuckoo Clock
// TODO: upload to codewars
function fizzBuzzCuckooClock(time) {
  const splitTime = time.split(":");
  const min = parseInt(splitTime[1]);
  let hour = parseInt(splitTime[0]);
  let output = "";
  if (hour === 0) output += "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo";
  if (min === 0) {
    if (hour > 12) hour -= 12;
    for (let i = 0; i < hour; i++) {
      i === hour - 1 ? output += "Cuckoo" : output += "Cuckoo ";
    }
  } else if (min === 30) {
    output = "Cuckoo";
  } else if (min % 5 === 0 && min % 3 === 0) {
    output = "Fizz Buzz";
  } else if (min % 5 === 0) {
    output = "Buzz";
  } else if (min % 3 === 0) {
    output = "Fizz";
  } else {
    output = "tick"
  }
  return output;
}
