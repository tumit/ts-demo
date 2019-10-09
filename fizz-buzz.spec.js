"use strict";
exports.__esModule = true;
var fizz_buzz_1 = require("./fizz-buzz");
var fizzBuzz = new fizz_buzz_1.FizzBuzz();
describe("fizz-buzz game", function () {
    it("should say 1 when 1", function () {
        expect(fizzBuzz.say(1)).toBe(1);
    });
    it("should say fizz when 3", function () {
        expect(fizzBuzz.say(3)).toBe('fizz');
    });
    it("should say buzz when 5", function () {
        expect(fizzBuzz.say(5)).toBe('buzz');
    });
});
