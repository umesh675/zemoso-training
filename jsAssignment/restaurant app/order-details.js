// JavaScript source code


function include(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('body').item(0).appendChild(script);
}

include("updatetable.js");

function myFunctionTable1() {

    html = `Table-1|Order Details`;
    document.getElementById("modal-title").innerHTML = html;

    myFunctionOrderTable(table1.getItem, 1);
}

function myFunctionTable2() {

    html = `Table-2|Order Details`;
    document.getElementById("modal-title").innerHTML = html;

    myFunctionOrderTable(table2.getItem, 2);
}

function myFunctionTable3() {
    html = `Table-3|Order Details`;
    document.getElementById("modal-title").innerHTML = html;

    myFunctionOrderTable(table3.getItem, 3);
}

function myFunctionOrderTable(itemList, tableNo) {

    html = '';
    var i = 1;
    itemList.forEach(function (value, key) {
        var price = (parseInt(value) * parseInt(localStorage.getItem(key)));

        var v = `${tableNo}${i}`;
        html = html + ` <tr>
            <td>${i}</td>
            <td id="${tableNo}${tableNo}${i}">${key}</td>
            <td id="${tableNo}${tableNo}${tableNo}${i}">${price}</td>
            <td>
                <input id="${tableNo}${i}" type="number" value="${value}" min="0"
                   onchange="changeData(event)"/>

                 <button type="submit" onclick="deleteFunction(${v})">Delete</button>
            </td>
        </tr>`;

        i++;
    });

    html = html + ` <tr>
            <td></td>
            <td></td>
            <td id="Total${tableNo}"><strong>Total Amount : ${table[tableNo - 1].getTotalAmount}</strong></td>
           </tr>`;

    document.getElementById("tbody").innerHTML = html;

    html = '';


    html = html + `<button type="submit" onclick="generateBill(${tableNo})">Generate Bill</button>`;

    document.getElementById("modal-footer").innerHTML = html;

}

function deleteFunction(vl) {

    var v = parseInt(vl);
    var tableNo = parseInt(v / 10);

    var keyId = `${parseInt(v / 10)}${parseInt(v / 10)}${v % 10}`;

    var item = document.getElementById(keyId).innerHTML;
    var tableData = table[tableNo - 1];
    var map = tableData.getItem;
    var val = parseInt(map.get(item));

    map.delete(item);
    tableData.setTotalAmount = tableData.getTotalAmount -
        val * parseInt(localStorage.getItem(item));


    if (tableNo == 1) {
        amountFunction(table1);
        localStorage.setItem("table1TotalAmount", table1.getTotalAmount);
        localStorage.table1Map = JSON.stringify(Array.from(table1.getItem.entries()));
    }
    if (tableNo == 2) {
        amountFunction(table2);
        localStorage.setItem("table2TotalAmount", table2.getTotalAmount);
        localStorage.table2Map = JSON.stringify(Array.from(table2.getItem.entries()));
    }
    if (tableNo == 3) {
        amountFunction(table3);
        localStorage.setItem("table3TotalAmount", table3.getTotalAmount);
        localStorage.table3Map = JSON.stringify(Array.from(table3.getItem.entries()));
    }


    myFunctionOrderTable(tableData.getItem, tableNo);
}

document.getElementById("1").addEventListener("click", myFunctionTable1);
document.getElementById("2").addEventListener("click", myFunctionTable2);
document.getElementById("3").addEventListener("click", myFunctionTable3);



function generateBill(tableNo) {

    if (tableNo == 1) {
        generateBillTable1();
    }
    else if (tableNo == 2) {
        generateBillTable2();
    }
    else {
        generateBillTable3();
    }
}

function generateBillTable1() {

    var totalAmount = table1.getTotalAmount;
    var itemList = table1.getItem;
    generateBillTable(itemList, totalAmount);

    table1.setItem = new Map();
    table1.setTotalAmount = 0;

    localStorage.setItem("table1TotalAmount", table1.getTotalAmount);
    localStorage.table1Map = JSON.stringify(Array.from(table1.getItem.entries()));

    amountFunction(table1);
}

function generateBillTable2() {
    var totalAmount = table2.getTotalAmount;
    var itemList = table2.getItem;
    generateBillTable(itemList, totalAmount);

    table2.setItem = new Map();
    table2.setTotalAmount = 0;

    localStorage.setItem("table2TotalAmount", table2.getTotalAmount);
    localStorage.table2Map = JSON.stringify(Array.from(table2.getItem.entries()));

    amountFunction(table2);
}

function generateBillTable3() {
    var totalAmount = table3.getTotalAmount;
    var itemList = table3.getItem;

    generateBillTable(itemList, totalAmount);

    table3.setItem = new Map();
    table3.setTotalAmount = 0;

    localStorage.setItem("table3TotalAmount", table3.getTotalAmount);
    localStorage.table3Map = JSON.stringify(Array.from(table3.getItem.entries()));

    amountFunction(table3);
}

function generateBillTable(itemList,totalAmount) {

    console.log(totalAmount);
    html = '';
    var i = 1;
    itemList.forEach(function (value, key) {
        var price = (parseInt(value) * parseInt(localStorage.getItem(key)));

        html = html + ` <tr>
            <td>${i}</td>
            <td>${key}</td>
            <td>${price}</td>
            <td>${value}</td>
        </tr>`;

        i++;
    });

    html = html + ` <tr>
            <td></td>
            <td></td>
            <td><strong>Total Amount : ${totalAmount}</strong></td>
           </tr>`;
    document.getElementById("tbody").innerHTML = html;

    document.getElementById("modal-footer").innerHTML = '<p>Visit Again</p>';
}

