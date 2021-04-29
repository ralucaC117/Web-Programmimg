var asc = true;


function sortHeader(index) {

    var table, rows, switching, i, j, x, y, shouldSwitch;
    table = document.getElementById("myTable");

    switching = true;

    while (switching) {
      switching = false;
      rows = table.rows;

      console.log(rows.length);

      for (i = 1; i <(rows.length-1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[index].innerHTML;
        y = rows[i+1].getElementsByTagName("td")[index].innerHTML;

        if(!isNaN(parseInt(x))){
            x = parseInt(x);
            y = parseInt(y);
        }
        if(x>y && asc==true){
             shouldSwitch = true;
             break;
        }
        else if(x<y && asc==false){
            shouldSwitch= true;
            break;
          }
      }
      if (shouldSwitch) {  
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
    asc = !asc;
}