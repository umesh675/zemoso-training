// JavaScript source code

function include(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('body').item(0).appendChild(script);
}

include("dragdrop.js");

function updateTableData(tableName, src) {

    tableName.addItemInMap = src;

    tableName.setTotalAmount = tableName.getTotalAmount +
        parseInt(localStorage.getItem(src));

}

function changeData(ev) {

    var id = parseInt(ev.target.getAttribute("id"));
    console.log(parseInt(id / 10));
    var tableName = `table${parseInt(id / 10)}`;

    if (tableName.localeCompare("table1") == 0) {

        console.log("table1");
        updateTable(table1, id);
        amountFunction(table1);
        document.getElementById("Total1").innerHTML =
            `<strong>Total Amount :${table1.getTotalAmount}</strong>`;

        localStorage.setItem("table1TotalAmount", table1.getTotalAmount);
        localStorage.table1Map = JSON.stringify(Array.from(table1.getItem.entries()));
        console.log(table1.getTotalAmount, 1);
    }
    else if (tableName.localeCompare("table2") == 0) {
        console.log("table2");
        updateTable(table2, id);
        amountFunction(table2);
        document.getElementById("Total2").innerHTML =
            `<strong>Total Amount :${table2.getTotalAmount}</strong>`;
        localStorage.setItem("table2TotalAmount", table2.getTotalAmount);
        localStorage.table2Map = JSON.stringify(Array.from(table2.getItem.entries()));
    }
    else {
        console.log("table3");
        updateTable(table3, id);
        amountFunction(table3);
        document.getElementById("Total3").innerHTML =
            `<strong>Total Amount :${table3.getTotalAmount}</strong>`;
        localStorage.setItem("table3TotalAmount", table3.getTotalAmount);
        localStorage.table3Map = JSON.stringify(Array.from(table3.getItem.entries()));
    }
}

function updateTable(tableData, id) {

    var val = document.getElementById(`${id}`).value;

    var tableNo = parseInt(id / 10);
    var rowNo = id % 10;

    var keyId = `${tableNo}${tableNo}${rowNo}`;
    var priceId = `${tableNo}${tableNo}${tableNo}${rowNo}`;

    var key = document.getElementById(keyId).innerHTML;

    var price = parseInt(localStorage.getItem(key));

    var map = tableData.getItem;

    var prevVal = map.get(key);

    var diff = val - prevVal;

    tableData.setTotalAmount = tableData.getTotalAmount + diff * price;
    map.set(key, val);

    html =
        document.getElementById(priceId).innerHTML = val * price;;


}
