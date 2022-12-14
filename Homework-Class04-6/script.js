let firstNames = ["Cristiano ","Lionel ","Erling "];
let lastNames = ["Ronaldo","Messi","Halland"];

function fullnames(firstNames, lastNames) {
  let fullname =[];
  let a =1;
  
  for (i =0; i <firstNames.length; i++) {
    fullname[i] = `${a}.` + firstNames[i] + lastNames[i];
    a++;
  }
  console.log(fullname);
}

fullnames(firstNames, lastNames);