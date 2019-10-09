import { Age } from './age.enum';


function totalAge(a1: Age, a2: Age) {
    return a1 + a2;
}



console.log('Hello world, Typescript', totalAge(Age.dylan, Age.mother));

const tp: [string, number] = ['abc', 10];


const ex1: object = {};
const ex2: object = undefined;

type person = { firstName: string };

const ex3: person = { firstName: 'Tumit' };

ex3.firstName = '';