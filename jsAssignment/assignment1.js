// JavaScript source code

//Q1: Write a program to demonstrate how a 
//function can be passed as a parameter to another function.
function func1(func2) {
    console.log("Hi you are in function1");
    func2();
}

function func2() {
    console.log("Hi you are in function2");
}

func1(func2);

/*Q2: An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For 
the arguments Roger and Waters, the function returns ‘RW’.
Write this function.*/

let myFunction = (str1, str2) => (str1[0] + str2[0]);

console.log(myFunction("Roger", 'Waters'));