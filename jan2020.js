// Wed Jan 1, 2020
// Find the index of the missing vowel from a string where a=0, e=1, etc.
// JS:
function absentVowel(x){
  if(x.includes("a") == false && x.includes("A") == false){ return 0; }
  else if(x.includes("e") == false && x.includes("E") == false){ return 1; }
  else if(x.includes("i") == false && x.includes("I") == false){ return 2; }
  else if(x.includes("o") == false && x.includes("O") == false){ return 3; }
  else if(x.includes("u") == false && x.includes("U") == false){ return 4; }
}

// Thurs Jan 2, 2020
// Extract domain from a url
// JS:
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};