/*
Activity 2: Nested If-Else Statements

. Task 3: Write a program to find the largest of three numbers using nested if-else statements.
*/

//Task-3

let num1 = 0;
let num2 = 10;
let num3 = -52;

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is the largest number`);
}
else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is the largest number`);
}
else {
    console.log(`${num3} is the largest number`);
}

//Or

let n1 = 12;
let n2 = 23;
let n3 = 34;

if (n1 >= n2) {
    if (n1 >= n3) {
        console.log(`${n1} is the largest number`);
    }
    else {
        console.log(`${n3} is the largest number`);
    }
}
else {
    if (n2 >= n3) {
        console.log(`${n2} is the largest number`);
    }
    else {
        console.log(`${n3} is the largest number`);
    }
}
