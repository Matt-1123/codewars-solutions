// Aug 10
// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using an asterisk (*).
function getStrings(city) {
  city = city.toLowerCase();
  let obj = {};
  let str = "";

  for (let elem of city) {
    if (!(elem in obj)) {
      obj[elem] = "*";
    } else {
      obj[elem] += "*";
    }
  }

  for (let key in obj) {
    if (key !== " ") {
      str += key + ":" + obj[key] + ",";
    }
  }

  return str.substring(0, str.length - 1);
}

// Aug 19
// Running out of space (7 kyu)
// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].
function spacey(array) {
  let result = [];
  let string = "";
  array.map((word) => {
    string += word;
    result.push(string);
  });
  return result;
}
