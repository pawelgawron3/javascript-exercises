//it's even shorter with map() instead of reduce()
const getTheTitles = function (arr) {
  return arr.reduce((acc, val) => {
    acc.push(val.title);
    return acc;
  }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
