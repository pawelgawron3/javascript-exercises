const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, val) => (acc += val), 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, val) => (acc *= val), 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let k = 1;
  if (num === 0 || num === 1) {
    return 1;
  } else {
    for (let i = num; i >= 2; i--) {
      k *= i;
    }
    return k;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
