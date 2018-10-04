import { FizzBuzz } from './fizz-buzz';

const fizzBuzz = new FizzBuzz();

describe(`fizz-buzz game`, () => {

  it(`should say 1 when 1`, ()=> {
    expect(fizzBuzz.say(1)).toBe(1);
  })

  it(`should say fizz when 3`, () => {
    expect(fizzBuzz.say(3)).toBe('fizz');
  })

  it(`should say buzz when 5`, () => {
    expect(fizzBuzz.say(5)).toBe('buzz');
  })  

});
