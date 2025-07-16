const removeFromArray = function (arr, ...numbers) {
  return arr.filter((num) => {
    return !numbers.some((numToCheck) => numToCheck === num);
  });
};

// Do not edit below this line
module.exports = removeFromArray;
