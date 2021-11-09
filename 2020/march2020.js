// ------ Mon 3/23/20 ------
// Growing Plant (7kyu - JS)
// Desc: Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let height = 0;
  let day = 1;
  if(height >= desiredHeight){return day}
  while(height < desiredHeight){
    height += upSpeed;
    if(height >= desiredHeight){
      break;
    }
    height -= downSpeed;
    day++;
  }
  return day; 
}

// ------ Tues 3/24/20 ------
// Sum of Odd Numbers (7kyu - JS)
// Desc: Given the triangle of consecutive odd numbers (triangle of rows of 1, 2, 3, etc), calculate the row sums of this triangle from the row index (starting at index 1) 
function rowSumOddNumbers(n){
  return Math.pow(n, 3);
}
