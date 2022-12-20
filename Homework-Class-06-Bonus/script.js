let recipeName = prompt("Enter the name of the recipe");

let printedRecipeName = document.getElementById("name");

for (let input of recipeName) {
    printedRecipeName.innerHTML += `${input}`
}

let numberOfIngredients = parseInt(prompt("How many ingredients do you need for the recipe"));


// Tuka probav alternativen nacin kade sto korisnikot gi vnesuva site iminija na recepti vo eden prompth, iako mislam deka ne e toa sto se bara.

// let nameOfIngredient = prompt("Enter the names of the ingredients(separete them by coma)");
// let listOfAllIngredients = nameOfIngredient.split(",");

// let printedIngredients = document.getElementById("ingredients");

// for (let input1 of listOfAllIngredients) {
//     printedIngredients.innerHTML += `<li>${input1}</li>`
// }


let ingredientNumber = [];
for (let i = 0; i < numberOfIngredients; i++) {
    ingredientNumber[i] = prompt("Enter the name of the ingredient:")
}

let ingredients = [];
for (let i = 0; i < numberOfIngredients; i++) {
    ingredients.push(ingredientNumber[i]);
}

let listOfAllIngredients = document.getElementById("ingredients");

for (let ingredient of ingredients) {
    listOfAllIngredients.innerHTML += `<li>${ingredient}</li>`
}
