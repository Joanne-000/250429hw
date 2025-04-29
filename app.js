import { strict as assert } from "node:assert";

/*
Exercise 1: maxOfTwoNumbers()

*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};

console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

*/

const isAdult = (x) => {
  if (x >= 21) {
    return "Adult";
  } else {
    return "Minor";
  }
};

console.log("Exercise 2 Result:", isAdult(21));

/*
Exercise 3: isCharAVowel()

*/

const isCharAVowel = (y) => {
  if (y === "a" || y === "e" || y === "i" || y === "o" || y === "u") {
    return true;
  } else {
    return false;
  }
};

console.log("Exercise 3 Result:", isCharAVowel("a"));

/*
Exercise 4: generateEmail()

*/

const generateEmail = (name, domain) => {
  return name + "@" + domain;
};

console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

*/

const greetUser = (name, time) => {
  return `Good ${time}, ${name}!`;
};

console.log("Exercise 5 Result:", greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

*/

const maxOfThree = (x, y, z) => {
  if (x > y && x > z) {
    return x;
  } else if (y > z) {
    return y;
  } else {
    return z;
  }
};

console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (x, y) => {
  return (x * y) / 100;
};
console.log("Exercise 7 Result:", calculateTip(50, 20));

/*
Exercise 8: convertTemperature()

*/

const convertTemperature = (x, y) => {
  if (y === "C") {
    return `${(x * 9) / 5 + 32} (Fahrenheit)`;
  } else if (y === "F") {
    return `${((x - 32) * 5) / 9} (Celsius)`;
  }
};
// assert.strictEqual(convertTemperature(32, "C"));
console.log("Exercise 8 Result:", convertTemperature(32, "C"));

/*
Exercise 9: basicCalculator()

*/
const basicCalculator = (x, y, operation) => {
  if (operation === "add") {
    return x + y;
  } else if (operation === "subtract") {
    return x - y;
  } else if (operation === " multiply") {
    return x * y;
  } else if (operation === "divide") {
    return x / y;
  }
};
console.log("Exercise 9 Result:", basicCalculator(10, 5, "subtract"));

/*
Exercise 10: calculateGrade()

*/

const calculateGrade = (score) => {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
};

console.log("Exercise 10 Result:", calculateGrade(85));
