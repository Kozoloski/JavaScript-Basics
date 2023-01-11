//const
let container = document.getElementById("alphabetButtons");
let answerDisplay = document.getElementById("hold");
let answer = "";
let hint = "";
let life = 10;
let wordDisplay = [];
let winningCheck = "";
let containerHint = document.getElementById("clue");
let buttonHint = document.getElementById("hint");
let buttonReset = document.getElementById("reset");
let livesDisplay = document.getElementById("mylives");
let myStickman = document.getElementById("stickman");
let context = myStickman.getContext("2d");


function generateButton() {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) => `<button class = "alphabetButtonJS" id="${letter}">${letter}</button>`
    )
    .join("");

  return buttonsHTML;
}

function handleClick(event) {
  const isButton = event.target.nodeName === "BUTTON";
  if (isButton) {
    const buttonId = document.getElementById(event.target.id);
    buttonId.classList.add("selected");
  }
  return;
}


const question = [
  "The Chosen Category Is Famous Football Players",
  "The Chosen Category Is Animals",
  "The Chosen Category Is Book Authors"
];

const categories = [
  [
    "johan-cruyff",
    "javier-zanetti",
    "lionel-messi",
    "antonin-panenka",
    "roberto-mancini",
  ],
  ["albatross", "barracuda", "falcon", "jack-russell", "opossum"],
  ["stephen-king", "isaac-asimov", "ray-bradbury", "oscar-wilde", "mark-twain"]
];

const hints = [
  [
    "He won the Ballon d'Or three times",
    "He was Inter Milan captain",
    "Consdired the best football player of all time",
    "He invented a penalty technique",
    "He has a premier league title as a manager",
  ],
  [
    "The largest wingspan of any bird in the world",
    "Saltwater fish",
    "Fastest bird in the world",
    "Small dog breed",
    "Thought to be immune to certain snake venom"
  ],
  [
    "Shinning",
    "I Robot",
    "Fahrenheit 451",
    "The Picture of Dorian Gray",
    "The Adventures of Tom Sawyer"
  ]
];


function setAnswer() {
  let categoryOrder = Math.floor(Math.random() * categories.length);
  let chosenCategory = categories[categoryOrder];
  let wordOrder = Math.floor(Math.random() * chosenCategory.length);
  let chosenWord = chosenCategory[wordOrder];

  let categoryNameJS = document.getElementById("categoryName");
  categoryNameJS.innerHTML = question[categoryOrder];


  answer = chosenWord;
  hint = hints[categoryOrder][wordOrder];
  answerDisplay.innerHTML = generateAnswerDisplay(chosenWord);
}

function generateAnswerDisplay(word) {
  let wordArray = word.split("");

  for (let i = 0; i < answer.length; i++) {
    if (wordArray[i] !== "-") {
      wordDisplay.push("_");
    } else {
      wordDisplay.push("-");
    }
  }
  return wordDisplay.join(" ");
}

function showHint() {
  containerHint.innerHTML = `Clue - ${hint}`;
}

buttonHint.addEventListener("click", showHint);


function init() {
  answer = "";
  hint = "";
  life = 10;
  wordDisplay = [];
  winningCheck = "";
  context.clearRect(0, 0, 400, 400);
  canvas();
  containerHint.innerHTML = `Clue -`;
  livesDisplay.innerHTML = `You have ${life} lives!`;
  setAnswer();
  container.innerHTML = generateButton();
  container.addEventListener("click", handleClick);
  console.log(answer);

}

window.onload = init();


buttonReset.addEventListener("click", init);


function guess(event) {
  const guessWord = event.target.id;
  const answerArray = answer.split("");
  let counter = 0;
  if (answer === winningCheck) {
    livesDisplay.innerHTML = `YOU WIN!`;
    return;
  } else {
    if (life > 0) {
      for (let j = 0; j < answer.length; j++) {
        if (guessWord === answerArray[j]) {
          wordDisplay[j] = guessWord;
          console.log(guessWord);
          answerDisplay.innerHTML = wordDisplay.join(" ");
          winningCheck = wordDisplay.join("");
          counter += 1;
        }
      }
      if (counter === 0) {
        life -= 1;
        counter = 0;
        animate();
      } else {
        counter = 0;
      }
      if (life > 1) {
        livesDisplay.innerHTML = `You have ${life} lives!`;
      } else if (life === 1) {
        livesDisplay.innerHTML = `You have ${life} life!`;
      } else {
        livesDisplay.innerHTML = `GAME OVER!`;
      }
    } else {
      return;
    }
    console.log(wordDisplay);
    if (answer === winningCheck) {
      livesDisplay.innerHTML = `YOU WIN!`;
      return;
    }
  }
}

container.addEventListener("click", guess);


function animate() {
  drawStickman[life]();
}

function canvas() {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#fff";
  context.lineWidth = 2;
}

function head() {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext("2d");
  context.beginPath();
  context.arc(60, 25, 10, 0, Math.PI * 2, true);
  context.stroke();
}

function draw($pathFromx, $pathFromy, $pathTox, $pathToy) {
  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke();
}

function frame1() {
  draw(0, 150, 150, 150);
}

function frame2() {
  draw(10, 0, 10, 600);
}

function frame3() {
  draw(0, 5, 70, 5);
}

function frame4() {
  draw(60, 5, 60, 15);
}

function torso() {
  draw(60, 36, 60, 70);
}

function rightArm() {
  draw(60, 46, 100, 50);
}

function leftArm() {
  draw(60, 46, 20, 50);
}

function rightLeg() {
  draw(60, 70, 100, 100);
}

function leftLeg() {
  draw(60, 70, 20, 100);
}

let drawStickman = [
  rightLeg,
  leftLeg,
  rightArm,
  leftArm,
  torso,
  head,
  frame4,
  frame3,
  frame2,
  frame1
];
