//1. Declare a variable called `name` and assign it your name as a string.
const name1 = 'Musa';
console.log(name1)

//2. Declare a variable called `age` and assign it your age as a number.
const age = 27;
console.log(age)

//3. Declare a variable called `isStudent` and assign it a boolean value of `true` or `false`.
const  isStudent = true;
console.log(isStudent);

//4. Declare a variable called `greeting` and assign it the string "Hello, world!".
const greeting = 'Hello world!';
console.log(greeting);
//5. Declare a function called `multiply` that takes two parameters and returns their product.
function multyply(a, b) {
    return a * b;
}
//6. Create a function called `greet` that takes a name as a parameter and returns a greeting message with the name.
function greet(someWord) {
    greet('thanks a lot Musa')
}
console.log(greet);

//7. Write a for loop that prints the numbers from 1 to 10.
for (let i=1; i<=10; i++) 
   console.log([i]); 

//8. Write a for loop that prints the even numbers from 1 to 20.
for (let i = 1; i <= 20; i++)
console.log([i]);

//9. Write an if statement that checks if a number is positive and prints "Positive" if true.
const number = 2;
if (number >= 0 ) 
console.log("positve");
else console.log("negative")

//10. Write a function called `isEven` that takes a number as a parameter and returns `true` if it's even, `false` otherwise.//
function isEven(number) {
    if  (number % 2 == 0) {
        return true;
        console.log(number +  " is Even Number");
     } else {
         return false;
         console.log(number +  " is Odd Number");
      }
      
}