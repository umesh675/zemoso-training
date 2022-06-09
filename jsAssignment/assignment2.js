// JavaScript source code

/*
function getData(uId) {
    setTimeout(() => {
        console.log("Fetched the data!");
        return "skc@gmail.com";
    }, 4000);
}

console.log("start");
var email = getData("skc");
console.log("Email id of the user id is: " + email);
console.log("end");

*/

function getData(uId) {

    return new Promise(resolve=> {

        setTimeout(() => {

            console.log("Fetched the data!");

            resolve("skc@gmail.com");

        }, 4000);
    })
}


async function asyncfunc() {

    console.log("start");
    var email = await getData("skc");
   /* console.log("Email id of the user id is: " +
        email.then(function (responce) { console.log(responce) }));
        */

    console.log("Email id of the user id is: " + email);

    console.log("end");

}

asyncfunc();




