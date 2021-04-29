var asc = true;

function sortHeader(index) {
    var table, rows,  row_to_be_sorted, switching, i, j, x, y, toSwitch;
    table = document.getElementById("myTable");

    switching = true;
    while (switching) {
      switching = false;

      row_to_be_sorted = table.rows[index];
      rows = table.rows;

      for (i = 0; i < (row_to_be_sorted.cells.length-2); i++) {
        toSwitch= false;
        x = row_to_be_sorted.getElementsByTagName("td")[i].innerHTML;
        y = row_to_be_sorted.getElementsByTagName("td")[i+1].innerHTML;

        if(!isNaN(parseInt(x))){
            x = parseInt(x);
            y = parseInt(y);
        }
        if(x>y && asc == true){
             toSwitch= true;
             break;
        }
        else if(x<y && asc == false){
          toSwitch= true;
          break;
        }
      }
      if (toSwitch) {  
        for(j=0; j<rows.length; j++){
            rows[j].cells[i+1].parentNode.insertBefore(rows[j].cells[i+2], rows[j].cells[i+1]);
        }
        switching = true;
      }
    }
    asc = !asc;
}