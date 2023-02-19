var num = 20369;
var countDigits = function (num) {
    var digits = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        digits++;
    }
    return digits;
};
console.log(countDigits(num));
console.log(Array.from(String(num), Number).length);
