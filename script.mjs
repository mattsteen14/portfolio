import { generateRandomNumber, immatureChoices } from "../immatureGreeting/modules.mjs";
import { immatureGreeting } from "../immatureGreeting/script.mjs";

immatureGreeting("male");
immatureGreeting("female");
immatureGreeting("neutral");

let childButton = document.getElementById("child-button").innerHTML;
let boyButton = document.getElementById("boy-button").innerHTML;
let girlButton = document.getElementById("girl-button").innerHTML;
let greeting = document.getElementById("greeting").innerHTML;
let button = document.querySelector('button').innerHTML;

const displayText = () => {
    greeting.style.display = "block";
}

const generateGreeting = (button) => {
    button.addEventListener("click", function() {
        if (button == childButton) {
            return greeting = immatureGreeting("neutral");
        } else if (button == boyButton) {
            return greeting = immatureGreeting("male");
        } else if (button == girlButton) {
            return greeting = immatureGreeting("female");
        }
    })
}