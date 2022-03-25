const removeFromArray = function(arr, ...rest) {
    let newArr = [];
    outer:
    for (let i of arr) {
        for (let j of rest) {
            if (i === j) {
                continue outer;
            }
        }
        newArr.push(i);
    };
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
