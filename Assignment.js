// 1. Variables & Data Types
let name = "Ali";
const age = 22;
var country = "Pakistan";
document.getElementById("variables").innerText =
  `Name: ${name}, Age: ${age}, Country: ${country}`;

// 2. Operators
function calculate() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let result = `
    Sum = ${a + b}
    Sub = ${a - b}
    Mul = ${a * b}
    Div = ${a / b}
  `;
  document.getElementById("calcResult").innerText = result;
}

// 3. Conditional Statements
function checkEvenOdd() {
  let num = parseInt(document.getElementById("numCheck").value);
  let res = (num % 2 === 0) ? "Even" : "Odd";
  document.getElementById("conditionResult").innerText = res;
}

function checkDay() {
  let day = document.getElementById("day").value;
  let message = "";
  switch (day) {
    case "Mon": message = "Start of the week"; break;
    case "Tue": message = "Keep going!"; break;
    case "Wed": message = "Mid-week!"; break;
    case "Fri": message = "Weekend coming!"; break;
    default: message = "Select a day";
  }
  document.getElementById("conditionResult").innerText = message;
}

// 4. Loops
function generateTable() {
  let num = parseInt(document.getElementById("tableNum").value);
  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += `${num} x ${i} = ${num * i}\n`;
  }
  document.getElementById("tableOutput").innerText = output;
}

// 5. Functions
function greet() {
  document.getElementById("functionResult").innerText = "Welcome to JavaScript Learning!";
}
let square = function () {
  return 4 * 4;
};
let double = (n) => n * 2;

function squareFunc() {
  document.getElementById("functionResult").innerText = "Square of 4 is " + square();
}
function doubleArrow() {
  document.getElementById("functionResult").innerText = "Double of 6 is " + double(6);
}

// 6. Arrays & Array Methods
let users = ["Ali", "Sara", "Umer", "Zara"];
let upper = users.map(u => u.toUpperCase());
let longNames = users.filter(u => u.length > 3);
let totalChars = users.reduce((acc, val) => acc + val.length, 0);

document.getElementById("arrayResult").innerHTML = `
  Users: ${users.join(", ")}<br>
  Uppercase: ${upper.join(", ")}<br>
  Long Names: ${longNames.join(", ")}<br>
  Total Characters: ${totalChars}
`;

// 7. Objects & JSON
let user = {
  name: "Ali Raza",
  age: 22,
  email: "ali@js.com"
};
let jsonUser = JSON.stringify(user);

document.getElementById("objectOutput").innerHTML = `
  Name: ${user.name}<br>
  Age: ${user.age}<br>
  Email: ${user.email}<br>
  JSON: ${jsonUser}
`;
