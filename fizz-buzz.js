"use strict";
exports.__esModule = true;
var FizzBuzz = /** @class */ (function () {
    function FizzBuzz() {
    }
    FizzBuzz.prototype.say = function (n) {
        if (n === 3)
            return 'fizz';
        if (n === 5)
            return 'buzz';
        return n;
    };
    return FizzBuzz;
}());
exports.FizzBuzz = FizzBuzz;
