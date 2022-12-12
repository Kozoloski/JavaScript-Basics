function atm(enteredMoney){
    let accountBalance = 500;
    if(enteredMoney <=500) {
        let moneyLeft = accountBalance - enteredMoney;
        return moneyLeft;
    }
    else if (enteredMoney > 500) {
        return "Not enough money"
    }
}

let type = parseInt(prompt("Enter the amount of money you need:"));
console.log(`You have ${atm(type)} left`)