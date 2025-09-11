console.log("hello world");

let num = 12;
let str = "hello";
let bol = true;
const bigIntVal = 1234567890123456789012345678901234567890n;
let undef;
let nul = null;
const sym = Symbol("id");

console.log(num);
console.log(str);
console.log(bol);
console.log(bigIntVal);
console.log(undef);
console.log(nul);
console.log(sym);

x = 5;
y = 6;
z = x + y;
console.log(z);

const price1 = 35;
const price2 = 6;
total = price1 + price2;
console.log(total);

name1 = "John";
console.log(name1);

name1 = "Doe";
console.log(name1);

// Function in JavaScript


function detailsofstudent(name, rollNo, age, score) {
    return "Name: " + name + ", Roll No: " + rollNo + ", Age: " + age + ", Score: " + score;
}

let studentName = detailsofstudent('Bhavya', '234g1a3319', 20, 90);
console.log(studentName);

let score = 90;
let addscore = score + 3;
console.log("Updated Score:", addscore);

function areaOfRectangle(length, width) {
    return length * width;
}

let length = 10;
let width = 5;
let area = areaOfRectangle(length, width);
console.log("Area of Rectangle:", area);

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let number = 100; 
let result = factorial(number);
console.log("Factorial of " + number + " is " + result);
