const generateRandomNumber = num => {
    return Math.floor(Math.random() * num)
};

// Arrays stored in object.
const immatureChoices = {
    greetings: ['Hello', 'Hi', 'Oi', 'You there', 'Alright', 'Come here', 'Go away', 'Hiya', 'Oh, it\'s you again', 'Hey', 'How do', 'How do you do', 'Bonjour', 'Hola', 'Ciao'],
    mPronouns: ['Mister', 'Master', 'King', 'Prince', 'boy', 'Sir', 'little boy', 'Senor', 'Monsieur'],
    fPronouns: ['Mrs', 'Miss', 'Queen', 'Princess', 'Ms', 'girly', 'Senora', 'Senorita', 'little miss', 'Mademoiselle'],
    pronouns: ['you', 'Doctor', 'Professor', 'Captain', 'President', 'General', 'Director', 'Officer', 'Admiral', 'Detective'],
    adjectives: ['smelly', 'stinky', 'ugly', 'poo poo', 'bum', 'bum bum', 'crazy', 'stupid', 'disgusting', 'fart', 'farty', 'silly', 'sweaty', 'slippery'],
    nouns: ['head', 'monkey', 'face', 'bum', 'legs', 'idiot', 'alien', 'monster', 'sausage', 'nugget', 'pants'],
};

function immatureGreeting(gender) {
    // gender is "male", "female", or "neutral"
    const relation = {
        "male": "son",
        "female": "daughter",
        "neutral": "child"
    };
    const pronounSelector = {
        "male": "mPronouns",
        "female": "fPronouns",
        "neutral": "pronouns"
    };
    let kid = relation[gender];
    let pronounProp = pronounSelector[gender];
    if (kid == undefined) {
        kid = "child";
        pronounProp = "pronouns";
    }
    const allPronounProps = ["mPronouns", "fPronouns", "pronouns"];

    let greeting = [];
    for (let prop in immatureChoices) {
        let randChoice = generateRandomNumber(immatureChoices[prop].length);
        // use the object's properties to customize the message being added to immatureGreeting  
        switch (prop) {
            case 'greetings':
                greeting.push(`Need an immature greeting for your ${kid} at school pick up? How about... \n"${immatureChoices[prop][randChoice]},`);
                break;
            case 'nouns': 
                greeting.push(`${immatureChoices[prop][randChoice]}!" \n`);
                break;
            default:
                if (allPronounProps.includes(prop) && (prop != pronounProp)) {
                    continue;
                } 
                else {
                    greeting.push(`${immatureChoices[prop][randChoice]}`);
                }
        }
    };
        return greeting.join(' ');
}

immatureGreeting("neutral");

let childButton = document.getElementById("child-button");
let boyButton = document.getElementById("boy-button");
let girlButton = document.getElementById("girl-button");
let greeting = document.getElementById("greeting");
let button = document.querySelector('button');

function generateGreeting() {
    if (button == childButton) {
        greeting.innerHTML = immatureGreeting("neutral");
    } else if (button == boyButton) {
        greeting.innerHTML = immatureGreeting("male");
    } else if (button == girlButton) {
        greeting.innerHTML = immatureGreeting("female");
    }
}

function childGreeting() {
    greeting.innerHTML = immatureGreeting("neutral");
}

function boyGreeting() {
    greeting.innerHTML = immatureGreeting("male");
}

function girlGreeting() {
    greeting.innerHTML = immatureGreeting("female");
}


// inline alering
document.getElementById("simpleInlineBtn").onclick = function () { alert('Hello Matt, this is alert!'); };


// simple func that adds something to the html by id.
function doSomething() {
    document.getElementById("simpleFuncClick").innerHTML = "Now I'm here Matt !!!";
}