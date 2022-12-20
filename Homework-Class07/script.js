function createTable() {

 let numberOfRows = prompt("Enter the number of rows");
 let numberOfColumns = prompt("Enter the number of columns");
  
    for(let r=0; r<parseInt(numberOfRows); r++)
     {
      let enteredRows = document.getElementById("myTable").insertRow(r);
   
      for(let c=0; c<parseInt(numberOfColumns); c++)  
       {
        let enteredCollumns = enteredRows.insertCell(c);
        enteredCollumns.innerHTML="Row-"+ r +" Column-" + c; 
       }
      }
}