
let header = document.getElementById("myTitle");

console.log(header.innerText);

header.innerText = "This is a new Header";

let firstParagraph = document.getElementsByClassName("paragraph")[0].innerText = "This is a new first paragraph.";

let secondParagraph = document.getElementsByClassName("second")[0].innerText = "This is a new second paragraph.";

let changeText = document.querySelector("text").innerText = "This is new line of text.";

let thirdDiv = document.querySelector("body");
let lastChild = thirdDiv.lastElementChild;
let ourDiv = lastChild.previousElementSibling;

let headingFromThirdDiv = ourDiv.firstElementChild.innerText = "This is a changed heading";

let secondHeadingFromThirdDiv = ourDiv.lastElementChild.innerText = "This is also a changed heading";


