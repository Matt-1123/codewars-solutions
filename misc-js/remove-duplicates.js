// Remove duplicates from a string
const removeDuplicates = (str) =>
  str
    .split("")
    .filter((letter, index) => str.indexOf(letter) === index)
    .join("");

const removeDuplicates2 = (str) => {
  const array = str.split("");
  return [...new Set(array)].join("");
};

console.log(removeDuplicates("haha1212")); // ha12
console.log(removeDuplicates2("haha1212")); // ha12
