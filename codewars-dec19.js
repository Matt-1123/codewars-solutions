// Fri Dec 20, 2019
// Generate range of integers (8kyu)
function generateRange(min, max, step){
  let arr = [];
  for(let i = min; i <= max; i += step){
    arr.push(i);
  }
  return arr;
}