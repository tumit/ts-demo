import { FizzBuzz } from './fizz-buzz';

const player = require("./fizz-buzz");
const fizzBuzz = new FizzBuzz();

describe(`fizz-buzz game`, () => {

  it(`should say 1 when 1`, ()=> {
    expect(player.say(1)).toBe(1);
  })

  it(`should say fizz when 3`, () => {
    expect(player.say(3)).toBe('fizz');
  })

  describe(`fizzBuzz instance`, () => {
    it(`should say fizz when 3`, () => {
      expect(fizzBuzz.say(3)).toBe('fizz');
    });
  });

});
