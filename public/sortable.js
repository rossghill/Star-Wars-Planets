let table = document.getElementById("planets_table");

    // < !--SCRIPT FOR SORTING TABLE-- >
            /* 
               Willmaster Table Sort
               Version 1.1
               August 17, 2016
               Updated GetDateSortingKey() to correctly sort two-digit months and days numbers with leading 0.
               Version 1.0, July 3, 2011
            
               Will Bontrager
               https://www.willmaster.com/
               Copyright 2011,2016 Will Bontrager Software, LLC
            
               This software is provided "AS IS," without 
               any warranty of any kind, without even any 
               implied warranty such as merchantability 
               or fitness for a particular purpose.
               Will Bontrager Software, LLC grants 
               you a royalty free license to use or 
               modify this software provided this 
               notice appears on all copies. 
            */

    let TableIDvalue = "planets_table";    
           
    let TableLastSortedColumn = -1;

    function SortTable() {
        let sortColumn = parseInt(arguments[0]);
            let type = arguments.length > 1 ? arguments[1] : 'T';
            let dateformat = arguments.length > 2 ? arguments[2] : '';
            let table = document.getElementById(TableIDvalue);
            let tbody = table.getElementsByTagName("tbody")[0];
            let rows = tbody.getElementsByTagName("tr");
            let arrayOfRows = new Array();
            type = type.toUpperCase();
            dateformat = dateformat.toLowerCase();
        for (let i = 0, len = rows.length; i < len; i++) {
                arrayOfRows[i] = new Object;
            arrayOfRows[i].oldIndex = i;
            let celltext = rows[i].getElementsByTagName("td")[sortColumn].innerHTML.replace(/<[^>]*>/g, "");
            if (type == 'D') {arrayOfRows[i].value = GetDateSortingKey(dateformat, celltext); }
            else {
                let re = type == "N" ? /[^\.\-\+\d]/g : /[^a-zA-Z0-9]/g;
            arrayOfRows[i].value = celltext.replace(re, "").substr(0, 25).toLowerCase();
        }
    }
        if (sortColumn == TableLastSortedColumn) {arrayOfRows.reverse(); }
        else {
                TableLastSortedColumn = sortColumn;
            switch (type) {
                case "N": arrayOfRows.sort(CompareRowOfNumbers); break;
            case "D": arrayOfRows.sort(CompareRowOfNumbers); break;
            default: arrayOfRows.sort(CompareRowOfText);
        }
    }
    let newTableBody = document.createElement("tbody");
        for (let i = 0, len = arrayOfRows.length; i < len; i++) {
                newTableBody.appendChild(rows[arrayOfRows[i].oldIndex].cloneNode(true));
            }
            table.replaceChild(newTableBody, tbody);
        } // function SortTable()
    
    function CompareRowOfText(a, b) {
        let aval = a.value;
            let bval = b.value;
            return (aval == bval ? 0 : (aval > bval ? 1 : -1));
        } // function CompareRowOfText()
    
    function CompareRowOfNumbers(a, b) {
        let aval = /\d/.test(a.value) ? parseFloat(a.value) : 0;
            let bval = /\d/.test(b.value) ? parseFloat(b.value) : 0;
            return (aval == bval ? 0 : (aval > bval ? 1 : -1));
        } // function CompareRowOfNumbers()


