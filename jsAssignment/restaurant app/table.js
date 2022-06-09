// JavaScript source code

function include(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('body').item(0).appendChild(script);
}

include("order-details.js");

class Table {
    constructor(seqNo, totalAmount, item) {
        this.seqNo = seqNo;
        this.totalAmount = totalAmount;
        this.items = item;
    }

    get getSeqNo() {
        return this.seqNo;
    }

    set setTotalAmount(totalAmount) {
        this.totalAmount = totalAmount;
    }

    get getTotalAmount() {
        return this.totalAmount;
    }

    set addItemInMap(item) {

        
        if (!this.items.has(item)) {
            this.items.set(item, 1);
        }
        else {
            let val = parseInt(this.items.get(item));
            val = val + 1;
            this.items.set(item, val);
        }
    }

    set setItem(item) {
        this.items = item;
    }

    get getItem() {
        return this.items;
    }

    get itemSize() {

        let count = 0;
        
        this.items.forEach(function (value, key) {
            count = count + parseInt(value);
        });

        return count;
    }
}

const table1 = new Table(1, 0, new Map());
const table2 = new Table(2, 0, new Map());
const table3 = new Table(3, 0, new Map());

table1.setTotalAmount = table1.getTotalAmount + dish1.getDishAmount;
table1.addItemInMap = dish1.getDishName;

/*
localStorage.setItem("table1TotalAmount", 100);
localStorage.table1Map = JSON.stringify(Array.from(table1.getItem.entries()));

localStorage.setItem("table2TotalAmount", 0);
localStorage.setItem("table3TotalAmount", 0);

localStorage.table2Map = JSON.stringify(Array.from(table2.getItem.entries()));
localStorage.table3Map = JSON.stringify(Array.from(table3.getItem.entries()));

*/

var table = [table1, table2, table3];

table1.setTotalAmount = parseInt(localStorage.getItem("table1TotalAmount"));
table1.setItem = new Map(JSON.parse(localStorage.table1Map));

table2.setTotalAmount = parseInt(localStorage.getItem("table2TotalAmount"));
table2.setItem = new Map(JSON.parse(localStorage.table2Map));

table3.setTotalAmount = parseInt(localStorage.getItem("table3TotalAmount"));
table3.setItem = new Map(JSON.parse(localStorage.table3Map));

let html = '';

for (let t of table) {

    html = html + `<li id="Table-${t.getSeqNo}"ondragenter="return dragEnter(event)"
                         ondrop="return dragDrop(event)"
                         ondragover="return dragOver(event)">`;

    html = html + ` <button type="button" class="btn btn-info btn-lg" 
data-toggle="modal" data-target="#myModal" id="${t.getSeqNo}">`;

    html = html + `Table-${t.getSeqNo}`;
    html = html + `<p id="amount${t.getSeqNo}">`;
    html = html + `</p>`;
    html = html + `</button>`;
    html = html + `</li>`;

}

document.getElementById("tableUL").innerHTML = html;

function amountFunction(tableName) {
    html = '';
    html = html + `Rs: ${tableName.getTotalAmount}|`;
    html = html + `Total items: ${tableName.itemSize}`;
    document.getElementById(`amount${tableName.getSeqNo}`).innerHTML = html;
}
amountFunction(table1);
amountFunction(table2);
amountFunction(table3);














