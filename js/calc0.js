var addDigit = (function(digit) {
    var num = 0;
    return function(digit) {
        num = num * 10 + digit;
        return num;
    };
})();

var add = (function() {
    var counter = 0;
    return function() {
        return counter += 1;
    };
})();
