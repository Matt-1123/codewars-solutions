// 10/24/21
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).
function rentalCarCost(d) {
  let cost;

  if (d >= 7) cost = d * 40 - 50;
  else if (d >= 3) cost = d * 40 - 20;
  else cost = d * 40;

  return cost;
}

// 10/24/21
// Build a function that returns an array of integers from n to 1 where n>0.
const reverseSeq = (n) => {
  let sequence = [];

  if (n > 0) {
    for (let i = n; i > 0; i--) {
      sequence.push(i);
    }
  }

  return sequence;
};

// 10/25/21
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
const updateLight = (current) => {
  if (current == "green") {
    return "yellow";
  } else if (current == "yellow") {
    return "red";
  } else if (current == "red") {
    return "green";
  } else console.error("Invalid input");
};
