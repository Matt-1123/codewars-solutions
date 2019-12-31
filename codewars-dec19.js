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

// Tues Dec 31, 2019
// Is x dividible by x and y?
// JS:
function isDivisible(n, x, y) {
  if(n % x == 0 && n % y == 0){
    return true;
  } else return false; 
}
// Java:
public class DivisibleNb {
	public static boolean isDivisible(long n, long x, long y) {
		if(n % x == 0 && n % y == 0){
      return true;
    } else return false;
	}
}