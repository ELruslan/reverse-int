module.exports = function reverse (n) {
    n = n + '';
    let str = n.split('').reverse().join('');
    let Number = parseInt(str, 10);
    console.log("reversed number: ", Number);
    return Number;
}

