// -------- SAT 2/2/19 ----------
// FIND THE INTEGRAL (8KYU)
// Create a function that finds the integral of the expression passed.
// Note that the output should be a string. The coefficient is always positive. Neither number will ever be 0.
function integrate(coefficient, exponent) {
  return `${coefficient / (exponent + 1)}x^${exponent + 1}`;
}

// Training JS #8: Conditional statement--switch
// Complete function ```howManydays```, function accept 1  parameters:```month```, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).
function howManydays(month) {
  switch (month) {
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}

// --------- MON 2/4/19 ----------
// Remove anchor from URL (7kyu)
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
function removeUrlAnchor(url) {
  if (url.indexOf("#") == -1) {
    return url;
  }
  return url.substring(0, url.indexOf("#"));
}

// -------- TUES 2/5/19 --------
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
// Tower block is represented as *
function towerBuilder(nFloors) {
  let tower = [];
  let baseLevel = "*";
  for (let i = 0; i < nFloors; i++) {
    tower.push(baseLevel);
    baseLevel += "**";
    for (let j = i - 1; j >= 0; j--) {
      tower[j] = ` ${tower[j]} `;
    }
  }
  return tower;
}

//------- THURS 2/7/19 --------
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot seperating them.
let abbrevName = name => {
  let nameArr = name.split(" ");
  return `${nameArr[0][0].toUpperCase()}.${nameArr[1][0].toUpperCase()}`;
};

// ------ SAT 2/9/19 ------
// Give you a function ```animal```, accept 1 parameter:```obj``` like this:
// {name:"dog",legs:4,color:"white"}
// and return a string like this:
// "This white dog has 4 legs."
function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// ------ SUN 2/10/19 ------
// Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.
var summation = num => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

// ------ FRI 2/15/19 ------
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
const feast = (beast, dish) => {
  return beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1];
}

// ------ SAT 2/16/19 ------
/* Write function RemoveExclamationMarks which removes all exclamation marks 
from a given string. */
function removeExclamationMarks(s) {
  return s.split('').filter(i => i !== "!").join('');
}

function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

// ------ SUN 2/17/19 ------
/*You will be given a number and you will need to return it as a string 
in Expanded Form. For example:
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/
function expandedForm(num) {
  let numStr = num.toString();
  let answer = '';
  for (let i = 0; i < numStr.length; i++) {
    let zeroCount = numStr.slice(i + 1).length;
    let zeros = '';
    for (let j = 0; j < zeroCount; j++) {
      zeros += '0';
    }
    if (numStr[i] !== '0' && i !== numStr.length - 1) {
      // if all that remains are zeros, do not include a space
      if (numStr.slice(i + 1).match(/^0+$/)) {
        answer += `${numStr[i]}${zeros}`;
      } else {
        answer += `${numStr[i]}${zeros} + `;
      }
    } else if (i === numStr.length - 1 && numStr[i] !== '0') {
      answer += `${numStr[i]}${zeros}`;
    }
  }
  return answer;
}

// ------ WED 2/20/19 ------
// Count how often sign changes in array. (7kyu)
const catchSignChange = arr => {
  let signChanges = 0;
  for (let i = 1; i < arr.length; i++) {
    let currentPositive = arr[i] >= 0;
    let prevPositive = arr[i - 1] >= 0;
    if (currentPositive !== prevPositive) {
      signChanges++;
    }
  }
  return signChanges;
}

// ------ THURS 2/21/19 ------
// Count the number of occurrences of each character 
// and return it as a list of tuples in order of appearance.
// Example:
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
let orderedCount = text => {
  let letters = text.split("");
  let uniqs = letters.filter((letter, index) => letters.indexOf(letter) == index)
  return uniqs.map((letter) => [letter, text.split(letter).length - 1])
}

// ------ FRI 2/22/19 ------
// Your task is to make function, which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step.
// If begin value is greater than the end, function should returns 0
const sequenceSum = (begin, end, step) => {
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
}

// ------ SAT 2/23/19 ------
// Vasya-Clerk (6kyu)
// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.
// TODO: Complete this kata (has errors)
function tickets(peopleInLine) {
  let enoughChange = 'YES';
  const ticketPrice = 25;
  // Cashier's change:
  let hundred = 0;
  let fifty = 0;
  let twentyFive = 0;

  peopleInLine.some(person => {
    // Take bill:
    if (person === 25) { twentyFive++ }
    else if (person === 50) { fifty++ }
    else if (person === 100) { hundred++ }
    // Give change:
    let changeDue = person - ticketPrice;
    if (changeDue === 0) {
      return;
    } else if (changeDue === 25) {
      if (twentyFive > 0) {
        twentyFive--;
      } else {
        enoughChange = 'NO';
        return;
      }
    } else if (changeDue === 75) {
      if (twentyFive > 0 && fifty > 0) {
        twentyFive--;
        fifty--;
      } else {
        enoughChange = 'NO';
        return;
      }
    }
  });
  return enoughChange;
}

// ------ SUN 2/24/19 ------
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
// Find the number of Friday 13th in the given year.
// Input: Year as an integer.
// Output: Number of Black Fridays in the year as an integer.
function unluckyDays(year) {
  let count = 0;
  for (let month = 0; month < 12; month++) {
    let date = new Date(year, month, 13);
    if (date.getDay() === 5) {
      count++;
    }
  }
  return count;
}

//Simple Fun #1: Seats in Theater
/* Given the total number of rows and columns in the theater (nRows and nCols, 
respectively), and the row and column you're sitting in, return the number of people 
who sit strictly behind you and in your column or to the left, assuming all seats 
are occupied.
*/
let seatsInTheater = (nCols, nRows, col, row) => (nCols - col + 1) * (nRows - row);


// ------ THURS 2/28/19 ------
// Reverse Words (7kyu)
/*Complete the function that accepts a string parameter, and reverses each word 
in the string. All spaces in the string should be retained.
*/
const reverseWords = str => {
  let revWords = str.split(' ').map(word => word.split('').reverse().join(''));
  return revWords.join(' ');
}
