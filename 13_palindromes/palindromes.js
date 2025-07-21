const palindromes = function (str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let arr = [...cleanStr];

  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] === arr[j]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
