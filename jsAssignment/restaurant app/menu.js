
function include(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('body').item(0).appendChild(script);
}

include("table.js");

class Dish {

    constructor(dishName, dishAmount) {
        this.dishName = dishName;
        this.dishAmount = dishAmount;
    }

    set setDishName(dishName) {
        this.dishName = dishName;
    }

    get getDishName() {
        return this.dishName;
    }

    set setDishAmount(dishAmount) {
        this.dishAmount = dishAmount;
    }

    get getDishAmount() {
        return this.dishAmount;
    }
}

var dish1 = new Dish("Gatte ki subzi", 100);
var dish2 = new Dish("Papad ki subzi", 70);
var dish3 = new Dish("Bajra ki roti with lasun chutney", 40);
var dish4 = new Dish("Dal baati churma", 100);
var dish5 = new Dish("Ker sangri", 40);
var dish6 = new Dish("Onion kachori", 20);
var dish7 = new Dish("Ghevar", 40);

localStorage.setItem("Gatte ki subzi", 100);
localStorage.setItem("Papad ki subzi", 70);
localStorage.setItem("Bajra ki roti with lasun chutney", 40);
localStorage.setItem("Dal baati churma", 100);
localStorage.setItem("Ker sangri", 40);
localStorage.setItem("Onion kachori", 20);
localStorage.setItem("Ghevar", 40);

var menuDetail = [dish1, dish2,dish3,dish4,dish5,dish6,dish7];
//menuDetail.push(dish1, dish2, dish3, dish4, dish5, dish6, dish7);

var html1 = '';

for (let dish of menuDetail) {

 
    html1 = html1 + `<li id="${dish.getDishName}" draggable="true" ondragstart="return dragStart(event)">`;
    html1 = html1 + `<a href="#">${dish.getDishName}</a>`;
    html1 = html1 + `<p>`;
    html1 = html1 + `${dish.dishAmount}`;
    html1 = html1 + `<\p>`;
    html1 = html1 + `</li>`;
    
}

document.getElementById("menuUL").innerHTML = html1;

function myFunction2(){
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    ul = document.getElementById("menuUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


document.getElementById("myInput2").onkeyup = myFunction2;
