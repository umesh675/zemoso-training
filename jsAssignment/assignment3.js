// JavaScript source code

//1. Refactor the following function into a one-liner:
const printName = (name) => {
    return "Hi " + name;
}

const printName1 = (name) => ("Hi " + name);

console.log(printName("rahul"));
console.log(printName1("ram"));


//2. Rewrite the following code using template literals

const printBill = (name, bill) => {
    return "Hi " + name + ", please pay: " + bill;
}

const printBill1 = (name, bill) => {
    return `Hi ${name}, please pay: ${bill}`;
}

console.log(printBill("ram", 400));
console.log(printBill1("rahul", 500));

//3. Modify the following code such that the object properties are destructured 
//and logged.

const person = {
    name: "Noam Chomsky",
    age: 92
}

let name = person.name;
let age = person.age;
console.log(name);
console.log(age);

let { name: name1, age: age1 } = person; //can define let { name, age } = person;

console.log(name1 + " " + age1);
