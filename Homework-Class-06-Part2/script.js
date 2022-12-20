let arrayNumbers = [11, 4, 5, 6, 7];

let myList = document.getElementById('list');

for (let number of arrayNumbers) {
    myList.innerHTML += `<li>${number}</li>`
}

function sumNumbers (numbers) {
  let sum = 0;
  for (i =0; i < arrayNumbers.length; i++) {
    sum += arrayNumbers[i];
  }
  document.getElementsByClassName("paragraph")[0].innerHTML = `The sum of the numbers of the list is ${sum}`;
}

sumNumbers(arrayNumbers);



