// Simple Example: JSON Basics

let books = [
  { title: "The Alchemist", author: "Paulo Coelho", price: 350 },
  { title: "Atomic Habits", author: "James Clear", price: 420 },
  { title: "1984", author: "George Orwell", price: 280 }
];

// Convert object → JSON string
let jsonString = JSON.stringify(books);
console.log("JSON String:", jsonString);

// Convert JSON string → object
let parsedBooks = JSON.parse(jsonString);
console.log("Parsed Object:", parsedBooks);

fetch("https://jsonplaceholder.typicode.com/users/")
  .then(res => res.json())
  .then(users => {
    let output = "Users List:\n";
    users.forEach(user => {
      output += `${user.name} - ${user.email}\n`;
    });
    document.body.innerHTML += output;
  });