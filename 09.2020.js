// 9/29/20
// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.
// JS:
function wordValue(a) {
  return a.map(
    (s, i) =>
      s
        .replace(/\s/g, "")
        .split("")
        .map((b) => b.charCodeAt() - 96)
        .reduce((acc, cur) => (acc += cur), 0) * (i + 1)
  );
}
// PHP: 
function word_value(array $a): array {
  $i=1;
  foreach($a as $b){
    $arr = str_split($b);
    $nb=0;
    foreach($arr as $c){
      if(ord($c)>=97) $nb += ord($c)-96;
    }
    $sort[]=$nb*$i;
    $i++;
  }
  return $sort;
}
// Java:
class Solution{
  public static int [] nameValue(String [] arr){
      int[] result = new int[arr.length];
      for (int i = 0; i < arr.length; i++){
          result[i] = arr[i].chars().filter(e -> e != ' ').map(e -> e - 96).sum() * (i+1);
      }
      return result;
  }
}

// 9/30/20
// Can we Divide it?
// JS:
function isDivideBy(number, a, b) {
  return number % a == 0 && number % b == 0;
}
// Python:
def is_divide_by(number, a, b):
    return number % a == 0 and number % b == 0
