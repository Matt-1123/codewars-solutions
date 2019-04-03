// ---------- Sun 1/20/19 -------------
  // create a function which returns an RNA sequence from the given DNA sequence
  function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
  }

// ---------- Mon 1/21/19 -------------
  // Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.
  // When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?
  // More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?
  // The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.
  // If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, [] for Kotlin or "-1 -1 -1".
  // function race(v1, v2, g) {
  if (v1 >= v2){return null;}

  let vDiff = v2 - v1;
  let hour = 0;
  let min = 0;
  let totalSec = Math.floor((g / vDiff) * 3600);
  for(totalSec; totalSec / 3600 >= 1; totalSec -= 3600){
    hour ++;
  }
  for(totalSec; totalSec / 60 >= 1; totalSec -= 60){
    min ++;
  }
  let sec = totalSec;
  return [hour, min, sec];
}

  // Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.
  // And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.
  // Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!
  // What a bunch of cheapskates!
  // Can you do it?
  var whatTimeIsIt = function(angle) {
    // outlier: 0 = 12:00
    if(angle == 0){return "12:00";}
    // One degree equals two minutes (720 min / 360 deg = 2).
    let totalMin = angle * 2;
    let hour = Math.floor(totalMin / 60);
    let min = Math.floor(totalMin % 60);
    // One hour = 30 deg. If angle is less than 30, the hour is 12, not 0.
    if(angle < 30){
      hour = 12;
    }
    let formattedHour = ("0" + hour).slice(-2);
    let formattedMin = ("0" + min).slice(-2);

    return `${formattedHour}:${formattedMin}`;
  }

// ----------- TUES 1/22/19 ---------------
  // Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
  // Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
  // If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
  function order(words){
    // Separate words.
    // Loop through each word in array to find 1. Push word to array. Repeat for 2.
    // Join array.
    let wordsArray = words.split(" ");
    let sortedWords = [];
    for(let i = 1; i <= wordsArray.length; i++){
      for(let j = 0; j < wordsArray.length; j++){
        if(wordsArray[j].includes(i)){
          sortedWords.push(wordsArray[j]);
        }
      }
    }
    return sortedWords.join(" ");
  }

  // Very simple, given a number, find its opposite.
  function opposite(number) {
    return number - (2 * number);
  }

// ---------- WED 1/23/19 -------------
  // Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
  // This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
  // This function should return a number (final grade). There are four types of final grades:
  // 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
  // 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
  // 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
  // 0, in other cases
  function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) return 100;
    if(exam > 75 && projects >= 5) return 90;
    if(exam > 50 && projects >= 2) return 75;
    return 0;
  }

// ----------- THURS 1/24/19 --------------
  // Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
  // The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
  // Upper or lower case letter does not matter -- "eNglisH" is also correct.
  // Return value as boolean values, true for the string to contains "English", false for it does not.
  function spEng(sentence){
    return sentence.toLowerCase().includes("english");
  }

// ---------- FRI 1/25/19 --------------
  // Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
  var countSheep = function (num){
    let murmur = "";
    for(let i = 1; i <= num; i++){
      murmur += `${i} sheep...`;
    }
    return murmur;
  }

  //   Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.
  // Make sure that your function does not return a false positive by just checking just the day.
  function isToday(date) {
    return new Date().getDay() == date.getDay();
  }

  // Given an array/list [] of integers , Find the product of the k maximal numbers.
  // e.g. maxProduct ({4, 3, 5}, 2) ==>  return (20)
  function maxProduct(numbers, size){
    numbers.sort(function(a, b){return b-a});
    numbers.splice(size);
    let product = numbers.reduce((a, b) => a * b);
    return product;
  }

// ------------ SAT 1/26/19 --------------
  // In this Kata, you will remove the left-most duplicates from a array/list of integers and return the result.
  function solve(arr){
    let singles = [];
    for(let i = arr.length - 1; i >= 0; i--){
      if(!singles.includes(arr[i])){
        singles.unshift(arr[i]);
      }
    }
    return singles;
  }

  // Principal Diagonal -- The principal diagonal in a matrix identifies those elements of the matrix running from North-West to South-East.
  // Secondary Diagonal -- the secondary diagonal of amatrix identifies those elements of the matrix running from North-East to South-West.
  // Your task is to find which diagonal is "larger": which diagonal has a bigger sum of their elements.
  // If the principal diagonal is larger, return "Principal Diagonal win!"
  // If the secondary diagonal is larger, return "Secondary Diagonal win!"
  // If they are equal, return "Draw!"
  // Note: You will always receive matrices of the same dimension. e.g. 2x2, 3x3, 5x5
  function diagonal(matrix){
    let n = matrix.length;
    let principal = [];
    let secondary = [];
    for(let i = 0; i < n; i++){
      principal.push(matrix[i][i]);
    }
    let secondaryCount = 0;
    for(let i = n - 1; i >= 0; i--){
      secondary.push(matrix[secondaryCount][i]);
      secondaryCount++;
    }
    let principalSum = principal.reduce(function(a, b) { return a + b; }, 0);
    let secondarySum = secondary.reduce(function(a, b) { return a + b; }, 0);
    if(principalSum > secondarySum){
      return `Principal Diagonal win!`;
    } else if(secondarySum > principalSum){
      return `Secondary Diagonal win!`;
    } else{
      return `Draw!`;
    }
  }

  // Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the array.
  // For example: ["3:1", "2:2", "0:1", ...]
  // Write a function that takes such list and counts the points of our team in the championship. Rules for counting points for each match:
  // if x>y - 3 points
  // if x<y - 0 point
  // if x=y - 1 point
  // Notes:
  // there are 10 matches in the championship
  // 0 <= x <= 4
  // 0 <= y <= 4
  function points(games) {
    totalPoints = 0;
    for(let i = 0; i < games.length; i++){
      let x = games[i][0];
      let y = games[i][2];
      if(x > y){
        totalPoints += 3;
      } else if(x == y){
        totalPoints++;
      }
    }
    return totalPoints;
  }

// ----------- SUN 1/27/19 -------------
  // Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
  // Task Overview:
  // You have to write a function that accepts three parameters:
  // cap is the amount of people the bus can hold excluding the driver.
  // on is the number of people on the bus.
  // wait is the number of people waiting to get on to the bus.
  // If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
  function enough(cap, on, wait) {
    if(cap - on >= wait){
      return 0;
    } else{
      return wait - (cap - on);
    }
  }

  // Write a function called whatday() which returns the day according to the number
  function whatday(num) {
    switch(num) {
      case 1:
      return "Sunday";
      case 2:
      return "Monday";
      case 3:
      return "Tuesday";
      case 4:
      return "Wednesday";
      case 5:
      return "Thursday";
      case 6:
      return "Friday";
      case 7:
      return "Saturday";
      default:
      return 'Wrong, please enter a number between 1 and 7';
    }
  }

  // Given a Divisor and a Bound , Find the largest integer N , Such That ,
  // Conditions :
  // N is divisible by divisor
  // N is less than or equal to bound
  // N is greater than 0.
  // Notes
  // The parameters (divisor, bound) passed to the function are only positve values .
  // It's guaranteed that a divisor is Found .
  function maxMultiple(divisor, bound){
    let maxMultiple = 0;
    for(let i = bound; i > 0; i--){
      if(i % divisor == 0){
        return maxMultiple = i;
      }
    }
    return maxMultiple;
  }

  // CLOSEST ELEVATOR (8 KYU)
  // Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):
  // left - The current floor of the left elevator
  // right - The current floor of the right elevator
  // call - The called floor, i.e. the floor you want to reach
  // It should return the name of the elevator closest to the called floor ("left"/"right").
  // In the case where both elevators are equidistant from the called floor, choose the elevator to the right.
  // You can assume that the inputs will always be valid integers in the closed-open range [0, 3).
  function elevator(left, right, call){
    if( Math.abs(call - left) < Math.abs(call - right) ){
      return "left";
    } else{
      return "right";
    }
  }

  // STEPS IN PRIMES (6KYU)
  //   The prime numbers are not regularly spaced. For example from 2 to 3 the step is 1. From 3 to 5 the step is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-steps primes:
  //
  // 3, 5 - 5, 7, - 11, 13, - 17, 19, - 29, 31, - 41, 43
  //
  // We will write a function step with parameters:
  //
  // g (integer >= 2) which indicates the step we are looking for,
  //
  // m (integer >= 2) which gives the start of the search (m inclusive),
  //
  // n (integer >= m) which gives the end of the search (n inclusive)
  //
  // In the example above step(2, 2, 50) will return [3, 5] which is the first pair between 2 and 50 with a 2-steps.
  //
  // So this function should return the first pair of the two prime numbers spaced with a step of g between the limits m, n if these g-steps prime numbers exist otherwise nil or null or None or Nothing or [] or "0, 0" or {0, 0} (depending on the language).

  // SOLUTION WIP: works but times out because it takes too long to find all the primes.
  function step(g, m, n) {
    //find primes
    let primes = [];
    let solution = [];
    for(let i = m; i <= n; i++){
      let isPrime = true;
      for(let j = 2; j < i; j++){
        if(i % j === 0){
          isPrime = false;
          break;
        }
      }
      if(isPrime === true){
        primes.push(i);
      }

      for(let i = 0; i < primes.length; i++){
        for(let j = i + 1; j < primes.length; j++){
          if (primes[j] - primes[i] == g){
            solution.push(primes[i], primes[j]);
            break;
          }
        }
        if(solution.length > 0){
          break;
        }
      }
      if(solution.length > 0){
        break;
      }
    }
    if(solution.length === 0){
      return null;
    } else{
      return solution;
    }

    //   let solution = [];
    //   for(let i = 0; i < primes.length; i++){
    //     for(let j = i + 1; j < primes.length; j++){
    //       if (primes[j] - primes[i] == g){
    //         solution.push(primes[i], primes[j]);
    //         break;
    //       }
    //     }
    //     if(solution.length > 0){
    //       break;
    //     }
    //   }

    //   if(solution.length === 0){
    //     return null;
    //   } else{
    //     return solution;
    //   }
  }

// ------------- MON 1/28/19 --------------
  // 1st day of month that are Sunday in a year range (7 kyu)
  // You will write a function that receive 2 parameters, 2 different years, to indicate a range of time.
  // The function will return the number of times a month between those years begin on Sunday, meaning the 1st day of the month is Sunday.
  // If there is only one year provided, return the number of times a month begin on Sunday on that year.
  // For instance: between 1901 and 2000, a month began on Sunday 171 times.
  function getTotalSundays (yearInit, yearEnd) {
    let solution = [];
    if(yearEnd == undefined){
      let firstDayOfMonth;
      for(let i = 0; i <= 11; i++){
        firstDayOfMonth = new Date(yearInit, i, 1);
        if(firstDayOfMonth.getDay() === 0){
          solution.push(firstDayOfMonth);
        }
      }
    }
    for(let i = yearInit; i <= yearEnd; i++){
      let firstDayOfMonth;
      for(let j = 0; j <= 11; j++){
        firstDayOfMonth = new Date(i, j, 1);
        if(firstDayOfMonth.getDay() === 0){
          solution.push(firstDayOfMonth);
        }
      }
    }
    return solution.length;
  }

  // Simple Beads Count (7kyu)
  // Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.
  // Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
  // If there are less than 2 blue beads return 0.
  function countRedBeads(n) {
    if(n < 2){return 0;}
    return n * 2 - 2;
  }

// ----------- TUES 1/29/19 -------------
  // A Strange Trip to the Market (8kyu)
  // Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note: It can also be written as 3.50 or three fifty.
  function isLockNessMonster(s) {
    if(s.search("tree fiddy") > -1 || s.search("3.50") > 1 || s.search("three fifty") > 1){
      return true;
    } else{
      return false;
    }
  }
  // answer using regex:
  const isLocknessMonster = (s) => /tree fiddy|three fifty|3.50/.test(s);
