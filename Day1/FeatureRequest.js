/*1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the
console.*/

let num1 = 10;
let str1 = "Krishna";
let value = true;
let obj1 = {
    name: "Krishna",
    brother: "Balram"
}
let arr1 = [1, 2, 3, 4, 5];

console.log(num1, typeof num1);
console.log(str1, typeof str1);
console.log(value, typeof value);
console.log(obj1, typeof obj1);
console.log(arr1, typeof arr1);



/*2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment. */

let num2 = 10;
num2 = 20;
console.log(num2); //20

const num3 = 10;
num3 = 20;
console.log(num3); //TypeError: Assignment to constant variable.