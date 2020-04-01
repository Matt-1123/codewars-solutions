// Wed 4/1/20
// Integer Difference (7 kyu)
// Write a function that accepts two arguments: an array/list of integers and another integer n.
// Determine the number of times where two integers in the array have a difference of n.
const intDiff = (arr, n) => {
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(Math.abs(arr[i] - arr[j]) == n) count++
    }
  }
  return count;
}