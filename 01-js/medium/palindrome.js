/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let temp = str.toLowerCase().replace(/[ .!,\?]/g, '');


  let firstHalf = temp.substring(0, str.length / 2);
  let secondHalf = temp.substring(str.length / 2);

  secondHalf = secondHalf.split("").reverse().join("");

  let i = 0;
  let j = 0;

  while (i < firstHalf.length && j < secondHalf.length) {

    if (firstHalf[i] !== secondHalf[j]) {
      return false;
    }

    i++;
    j++;
  }

  return true;
}

module.exports = isPalindrome;
