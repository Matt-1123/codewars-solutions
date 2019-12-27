// Fri Dec 20, 2019
// Generate range of integers (8kyu)
function generateRange(min, max, step){
  let arr = [];
  for(let i = min; i <= max; i += step){
    arr.push(i);
  }
  return arr;
}

// Mon Dec 23, 2019
// Remove vowels from a string (7kyu)
var removeVowels = function(str){
  return str.replace(/[aeiou]/ig,'');
}

// Fri Dec 27, 2019
// Remove spaces (8kyu)
// JS:
function noSpace(x){
  return x.replace(/ /g,"");
}
// Java:
class Kata {
  static String noSpace(final String x) {
      return x.replaceAll("\\s+","");
  }
}