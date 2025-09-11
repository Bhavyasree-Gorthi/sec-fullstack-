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

let x = 5;
let y = 6;
let z = x + y;
console.log(z);

const price1 = 5;
const price2 = 6;
let total = price1 + price2;
console.log(total);

let name1 = "John"; // Use let instead of const
console.log(name1);

name1 = "Doe"; 
console.log(name1);

// Function in JavaScript
function detailsofstudent(name, rollNo, age) {
    return "Name: " + name + ", Roll No: " + rollNo + ", Age: " + age;
}

let studentName = detailsofstudent('Bhavya', '234g1a3319', 20);
console.log(studentName);