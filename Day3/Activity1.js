/*
Activity 1: If-Else Statements

. Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
. Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console. */

//Task-1

let number = -9;
if (number > 0) {
    console.log("Number is positive");
}
else if (number < 0) {
    console.log("Number is negative");
}
else {
    console.log("Number is zero");
}

//Task-2

let age = 17;
if (age >= 18) {
    console.log("Person is eligible to vote");
}
else {
    console.log("Person is not eligible to vote");
}