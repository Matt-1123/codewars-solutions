// 12/1/21
// Description:

// Bleatrix Trotter the sheep has devised a strategy that helps her fall asleep faster. First, she picks a number N. Then she starts naming N, 2 × N, 3 × N, and so on.

// Whenever she names a number, she thinks about all of the digits in that number. She keeps track of which digits (0, 1, 2, 3, 4, 5, 6, 7, 8, and 9) she has seen at least once so far as part of any number she has named. Once she has seen each of the ten digits at least once, she will fall asleep.

// Bleatrix must start with N and must always name (i + 1) × N directly after i × N.

// For example, suppose that Bleatrix picks N = 1692. She would count as follows:

//     N = 1692. Now she has seen the digits 1, 2, 6, and 9.
//     2N = 3384. Now she has seen the digits 1, 2, 3, 4, 6, 8, and 9.
//     3N = 5076. Now she has seen all ten digits, and falls asleep.

// The purpose of this kata is to return the last number Bleatrix Trotter sees before falling asleep.
// Input
// Will always be positive integer or zero
// Output
// The last number Bleatrix Trotter sees or "INSOMNIA" (-1 in Rust, C++ and COBOL) if she will count forever
function trotter(n) {
  if (n === 0) return "INSOMNIA";
  const copy = n;
  const arr = [];
  n.toString()
    .split("")
    .forEach((elem) => (arr.includes(elem) ? undefined : arr.push(elem)));
  while (arr.length !== 10) {
    n = n + copy;
    n.toString()
      .split("")
      .forEach((elem) => (arr.includes(elem) ? undefined : arr.push(elem)));
  }
  return n;
}

// 12/19/21
// Move the zeros in an array to the end of the array, maintaining the order in which they appear in the original array.
function removeZeros(array) {
  let sortedArr = array.filter((num) => num != 0);
  array.forEach((num) => {
    if (num === 0) sortedArr.push(num);
  });
  return sortedArr;
}
