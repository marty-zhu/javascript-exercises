const add = function(a, b) {
    return a+b;
};

const subtract = function(a, b) {
    return a-b;
};

const sum = function(arr) {
    let a = [...arr];
    return a.reduce((a, b) => a+b);
};

const multiply = function(a, b) {
    return a*b;
};

const power = function(base, pow) {
    return Math.pow(base, pow);
};

const factorial = function(n) {
	if (n == 1) {
        return 1;
    } else {
        return n*factorial(n-1);
    };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
