let arrayNumbers = [1, 4, 5, 6, 7];

function sumNumbers (numbers) {
  let sum = 0;
  for (i =0; i < arrayNumbers.length; i++) {
    sum += arrayNumbers[i];
  }
  console.log (`The sum of the numbers is ${sum}`);
}

sumNumbers(arrayNumbers);



// Validate Nunber

let array = [2, 3, "T", 5, "I"];
  
function validateNumber(validate) {
  for (i =0; i < array.length; i++) {
    if (!isNaN(validate[i])) {
      console.log(validate[i] + " is a number");
    } else {
      console.log ("Error!!!");
    }
  }
  }

validateNumber(array);

