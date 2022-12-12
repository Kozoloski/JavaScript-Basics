
// If/Else

let input = prompt("Enter your year of birth:");

let yearOfBirth = parseInt(input);

let chineseZodiac = (yearOfBirth - 4) % 12;

if(chineseZodiac === 0) {
    console.log("Your Chinese Zodiac is Rat");
}

else if(chineseZodiac === 1) {
    console.log("Your Chinese Zodiac is Ox");
}

else if(chineseZodiac === 2) {
    console.log("Your Chinese Zodiac is Tiger");
}

else if(chineseZodiac === 3) {
    console.log("Your Chinese Zodiac is Rabbit");
}

else if(chineseZodiac === 4) {
    console.log("Your Chinese Zodiac is Dragon");
}

else if(chineseZodiac === 5) {
    console.log("Your Chinese Zodiac is Snake");
}

else if(chineseZodiac === 6) {
    console.log("Your Chinese Zodiac is Horse");
}

else if(chineseZodiac === 7) {
    console.log("Your Chinese Zodiac is Goat");
}

else if(chineseZodiac === 8) {
    console.log("Your Chinese Zodiac is Monkey");
}

else if(chineseZodiac === 9) {
    console.log("Your Chinese Zodiac is Rooster");
}

else if(chineseZodiac === 10) {
    console.log("Your Chinese Zodiac is Dog");
}

else if(chineseZodiac === 11) {
    console.log("Your Chinese Zodiac is Pig");
}




// Switch

let username = prompt("Enter your birth year:");
let year_of_birth = parseInt(username);
let chinese_zodiac = (year_of_birth - 4) % 12;

switch(chinese_zodiac) {
    case 0 :
        console.log("Your Chinese Zodiac is Rat");
        break;
    case 1 :
        console.log("Your Chinese Zodiac is Ox");
        break;
    case 2 :
        console.log("Your Chinese Zodiac is Tiger");
        break;
    case 3 :
        console.log("Your Chinese Zodiac is Rabbit");
        break;
    case 4 :
        console.log("Your Chinese Zodiac is Dragon");
        break;
    case 5 :
        console.log("Your Chinese Zodiac is Snake");
        break;
    case 6 :
        console.log("Your Chinese Zodiac is Horse");
        break;
    case 7 :
        console.log("Your Chinese Zodiac is Goat");
        break;
    case 8 :
        console.log("Your Chinese Zodiac is Monkey");
        break;
    case 9 :
        console.log("Your Chinese Zodiac is Rooster");
        break;
    case 10 :
        console.log("Your Chinese Zodiac is Dog");
        break;
    case 11 :
        console.log("Your Chinese Zodiac is Pig");
        break;
}