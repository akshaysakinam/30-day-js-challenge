/*
Activity 5: Combining Conditions

. Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the
result to the console.
*/

//Task-7

let year = 1900;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year`);
}
else {
    console.log(`${year} is not a leap year`);
}



/*
Leap Year Rules Recap:
Divisibility by 4: Years divisible by 4 are potential leap years.
Exception for Divisibility by 100:
Years divisible by 100 are not leap years, unless:
They are also divisible by 400.
Why year % 400 === 0 Condition Is Required:
When a year is divisible by 100 (year % 100 === 0), it may or may not be a leap year:
If it is divisible by 400 (year % 400 === 0), then it is a leap year (e.g., 2000).
If it is not divisible by 400 but divisible by 100 (year % 100 === 0), then it is not a leap year (e.g., 1900).
Therefore, the condition year % 400 === 0 ensures that years like 2000, which are divisible by both 100 and 400, are correctly identified as leap years despite being divisible by 100.
Example:
Let's consider an example:

Year 2000:

Divisible by 4? Yes (2000 % 4 === 0).
Divisible by 100? Yes (2000 % 100 === 0).
Divisible by 400? Yes (2000 % 400 === 0).
Therefore, 2000 is a leap year.
Year 1900:

Divisible by 4? Yes (1900 % 4 === 0).
Divisible by 100? Yes (1900 % 100 === 0).
Divisible by 400? No (1900 % 400 !== 0).
Therefore, 1900 is not a leap year.
Conclusion:
The condition year % 400 === 0 is necessary because it handles the exception to the rule that years divisible by 100 are not leap years unless they are also divisible by 400. This ensures that the leap year calculation accurately follows the established rules and correctly identifies leap years and non-leap years based on these conditions.
*/