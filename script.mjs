import { generateRandomNumber, immatureChoices } from "../immatureGreeting/modules.mjs";
import { immatureGreeting } from "../immatureGreeting/script.mjs";

// immatureGreeting("male");
// immatureGreeting("female");
// immatureGreeting("neutral");

let childButton = document.getElementById("child-button");
let boyButton = document.getElementById("boy-button");
let girlButton = document.getElementById("girl-button");
let generateGreeting = document.getElementById("greeting");

childButton.addEventListener("click", function() {
    generateGreeting.innerText = immatureGreeting("neutral");
});

boyButton.addEventListener("click", function() {
    generateGreeting.innerText = immatureGreeting("male");
});

girlButton.addEventListener("click", function() {
    generateGreeting.innerText = immatureGreeting("female");
});