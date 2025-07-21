const fibonacci = function (num) {
  //1, 1, 2, 3, 5, 8...
  if (num == 0) {
    return 0;
  } else if (num < 0) {
    return "OOPS";
  } else {
    let arr = [1, 1];
    for (let i = 2; i < num; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr.at(-1);
  }
};

// Do not edit below this line
module.exports = fibonacci;
