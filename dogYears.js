/* First 2 years of dog life counts as 10.5 years each. After that, every year then counts as 4 */

const myAge = 19; //My age
let earlyYears = 2; // first 2 years of life
earlyYears *= 10.5;
let laterYears = myAge - 2; //I already accounted for 2 years of my life
laterYears *= 4; // Every year after first 2

const myAgeInDogYears = earlyYears + laterYears; // Age if I was a dog
const myName = 'Jason Reed'.toLowerCase(); //My name in lower case

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
// Output: My name is jason reed. I am 19 years old in human years which is 89 years old in dog years.