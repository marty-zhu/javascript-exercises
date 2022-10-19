const palindromes = function (str) {
    let noPunctuation = str.replace(/[\.,\!\?\s]/g, "");
    let strArr = [...noPunctuation];
    let reversed = strArr.reverse();
    return strArr == reversed;
};

// console.log(palindromes('racecar!'));

// Do not edit below this line
module.exports = palindromes;
