function calculateDogAge(dogOrHuman, age){
    if (dogOrHuman ==="Dog") {
        let dogYears = age*7;
        return dogYears;
    }
    else if (dogOrHuman ==="Human") {
        let humanYears = age/7;
        return humanYears;
    }
}

let type = prompt("For dog years enter Dog, for human years enter Human");
let value = parseInt(prompt("Enter the years"));
console.log (`You have ${calculateDogAge(type, value)} years`);