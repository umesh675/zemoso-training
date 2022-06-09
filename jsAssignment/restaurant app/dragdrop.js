// JavaScript source code

function dragStart(ev) {
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute("id"));
    console.log(ev.target.getAttribute("id"));
    return true;
}

//By default, data / elements cannot be dropped in other elements.To allow a drop, 
//we must prevent the default handling of the element
function dragEnter(ev) {
    event.preventDefault();
    return true;
}
function dragOver(ev) {
    return false;
}
function dragDrop(ev) {
    var src = ev.dataTransfer.getData("Text");
    var tableId = ev.target.getAttribute("id");

    if (tableId.localeCompare("Table-1") == 0) {

        console.log("table1");
        updateTableData(table1, src);
        amountFunction(table1);
        localStorage.setItem("table1TotalAmount", table1.getTotalAmount);
        localStorage.table1Map = JSON.stringify(Array.from(table1.getItem.entries()));
    }
    else if (tableId.localeCompare("Table-2") == 0) {
        console.log("table2");
        updateTableData(table2, src);
        amountFunction(table2);
        localStorage.setItem("table2TotalAmount", table2.getTotalAmount);
        localStorage.table2Map = JSON.stringify(Array.from(table2.getItem.entries()));
    }
    else {
        console.log("table3");
        updateTableData(table3, src);
        amountFunction(table3);
        localStorage.setItem("table3TotalAmount", table3.getTotalAmount);
        localStorage.table3Map = JSON.stringify(Array.from(table3.getItem.entries()));
    }

    ev.stopPropagation();
    return false;
}