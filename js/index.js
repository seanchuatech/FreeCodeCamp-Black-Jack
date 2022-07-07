
let age = 22;

if (age < 22) {
    console.log("Sorry, you cannot enter the club!");
} else {
    console.log("Welcome to the club!");
}

// let firstCard = getRandomCard();
// let secondCard = getRandomCard();

// let firstCard = 0;
// let secondCard = 0;
let player = {
    name : "Sean",
    chips : 145
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ': $' + player.chips;

// let sumEl = document.querySelector("#sum-el");
console.log(cards)


// console.log(firstCard);
// console.log(secondCard);
// console.log(sum);

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) {
        return randomCard = 11;
    } else if (randomCard > 10) {
        return randomCard = 10;
    } else {
        return randomCard;
    }
    
}

function startGame() {
    isAlive = true;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' ';
        console.log(cards[i]);
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! ";
        isAlive = false;
    }

    // return message;
    console.log(message);
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackJack) {

        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();

    }
    
}


// if (sum <= 20) {
//     message = "Do you want to draw a new card?";
    
// } else if (sum === 21) {
//     message = "Wohoo! You've got Blackjack!";
//     hasBlackJack = true;
// } else {
//     message = "You're out of the game! ";
//     isAlive = false;
// }
// console.log(message);

// // Cash out
// console.log(hasBlackJack);
// console.log(isAlive);

// EXERCISE
// age = 100;

// if (age < 100) {
//     console.log("You're not elegible");
// } else if (age === 100) {
//     console.log("Here's your birthday card from the King himself!");
// } else if (age > 100) {
//     console.log("You've already gotten one, right?");
// } else {
//     console.log("Something is definitely fishy!");
// }

// let featurePosts = ["Check out my Netflix clone", "Here's the code for my project", "I've just relaunched my portfolio"
// ];

// let experience = ["worked as a tech va", "college graduate and bunch on online tutorials, self learning", "got few projects lol", "webdev"];


// console.log(experience.length)

// for (let count = 10; count < 100 + 1; count += 10) {
//     console.log(count);
// }

// let greetingEl = document.getElementById("greeting-el");
// let experience = ['SEAN', 'KIMWEEL', 'REGIE', 'FRANCIS', 'MARK', 'MAC', 'VAN'];

// for (let i = 0; i < experience.length; i++) {
//     console.log(experience[i]);

//     greetingEl.textContent += experience[i] + ' ';
// }

// let player1Time = 300;
// let player2Time = 200;
// function totalRaceTime() {
//     if (player1Time > player2Time) {
//         return player1Time;
//     } else {
//         return player2Time;
//     }
// }

// let totalRaceTimes = totalRaceTime();
// console.log(totalRaceTimes);

// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

//     if (!hasSolvedChallenge && !hasHintsLeft) {
//         showingSolution();
//     }

// function showingSolution() {
//     console.log("Showing the solution...");
// }

// let likesDocumentaies = false;
// let likesStartup = false;

// if (likesDocumentaies || likesStartup) {
//     recommendMovie();
// }
// function recommendMovie() {
//     console.log("Hey, check out this new film");
// }

// let airbnb = {
//     title: 'castle kasanobo',
//     available: true,
//     price: 1500,
//     tags: ['castle', 'beautiful']
// }

// console.log(airbnb.tags[1]);

//4:10:50 -recap too sleepy

// EXERCISE 1
// let person = {
//     name: "Sean",
//     age: "26",
//     country: "Philippines"
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
// }

// logData();

//EXERCISE 2

// let passengerAge = 67;

// if (passengerAge < 6) {
//     console.log("Free");
// } else if (passengerAge >= 6 && passengerAge <= 17) {
//     console.log("Child Discount");
// } else if (passengerAge >= 18 && passengerAge <= 26) {
//     console.log("Student Discount");
// } else if (passengerAge >= 27 && passengerAge <= 66) {
//     console.log ("Full Price");
// } else if (passengerAge > 66) {
//     console.log("Senior Cetizen Discount");
// } else {
//     console.log("Something went wrong!");
// }

// EXERCISE 3

// let largestCountries = ["CHINA", "INDIA", "USA", "INDONESIA", "PAKISTAN"];

// for (let i = 0; i < largestCountries.length; i++) {
//     console.log("- " + largestCountries[i]);
// }

// let largestCountries = ["TUVALU", "INDIA", "USA", "INDONESIA", "MONACO"];

// largestCountries.shift();
// largestCountries.unshift("CHINA");
// largestCountries.pop();
// largestCountries.push("PAKISTAN");
// for (let i = 0; i < largestCountries.length; i++) {
//     console.log("-"+largestCountries[i]);

// }

// EXERCISE 4

// let dayOfMonth = 13;
// let weekday = "Friday";

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("Spooky!");
// } else {
//     console.log("Not Spooky!");
// }

// EXERCISE 5

// let hands = ["ROCK", "PAPER", "SCISSOR"];


// function randomArray() {
    
//     let randomIndex = Math.floor(Math.random() * hands.length);
//     console.log(randomIndex);
//     console.log(hands[randomIndex]);
// }

// randomArray();


//EXERCISE 6 

// let fruit = ["APPLE", "ORANGE", "APPLE", "APPLE", "ORANGE"];

// for (let i = 0; i < fruit.length; i++) {
//     if (fruit[i] === "APPLE") {
//         console.log(fruit[i]);
//     }
// }