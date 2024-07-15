/*
Activity 4: Logical Operators

. Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
. Task 12: Write a program that uses the | | operator to combine two conditions and log the result to the console.
. Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
*/

//Task 11

let num1 = 15;
let num2 = 25;
console.log(num1 > 10 && num2 < 30); //true
console.log(num1 > 20 && num2 < 30); //false
console.log(num1 > 20 && num2 > 30); //false

//Task 12

let n1 = 15;
let n2 = 25;
console.log(n1 > 10 || n2 < 30); //true
console.log(n1 > 20 || n2 < 30); //true
console.log(n1 > 20 || n2 > 30); //false

//Task 13

let a = 15;
console.log(!(a > 110)); //true
console.log(!(a < 20)); //false