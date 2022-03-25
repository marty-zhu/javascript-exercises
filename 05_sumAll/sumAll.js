const sumAll = function(a, b) {
    if (a < 0 || (typeof(a) != 'number')) {
        return 'ERROR';
    } else if (b < 0 || (typeof(b) != 'number')) {
        return 'ERROR';
    };

    if (a > b) {
        [a, b] = [b, a];
    };

    let arr = [];
    for (let i = a; i < b + 1; i++) {
        arr.push(i);
    };
    let sum = arr.reduce((allPrevious, current) => allPrevious + current);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
