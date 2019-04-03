// 12/7/18
// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.
function removeEveryOther(arr){
  for (let i = 0; i < arr.length; i++){
    arr.splice(i + 1, 1);
  }
  return arr;
}

// 12/18/18
// In this kata you will create a function that takes in a list and returns a list with the reverse order.
function reverseList(list) {
  return list.reverse();
}
