const ftoc = function(f) {
    let c = ((f - 32) * 5 / 9).toFixed(1);
    return Number(c);
};

const ctof = function(c) {
    let f = (c * 9 / 5 + 32).toFixed(1);
    return Number(f);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
