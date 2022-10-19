const fibonacci = function(n) {
    let seq = [1, 1];
    while (n > seq.length) {
        seq.push(seq.at(-1) + seq.at(-2));
    };
    return seq.at(-1);
};

// fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
