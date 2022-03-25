const reverseString = function(string) {
    let arr = [...string];
    let arrReversed = arr.reverse();
    return arrReversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
