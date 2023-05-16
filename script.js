// Define User choice based on the chosen button

let userChoice;

let buttonPaper = document.querySelector('#buttonPaper');
let buttonScissors = document.querySelector('#buttonScissors');
let buttonRock = document.querySelector('#buttonRock');
let title = document.querySelector('#text-prompt .title img');
let subtext = document.querySelector('#text-prompt p');
let buttons = document.querySelector('#buttons');
let manFace = document.querySelector('#man-face img');
let botFace = document.querySelector('#bot-face img');
let manFaceBox = document.querySelector('#man');
let botFaceBox = document.querySelector('#bot');
let manBubble = document.querySelector('#man .bubble img');
let botBubble = document.querySelector('#bot .bubble img');

buttonPaper.onclick = () => {
    userChoice = "paper";
    rockPaperScissors(userChoice);

}

buttonScissors.onclick = () => {
    userChoice = "scissors";
    rockPaperScissors(userChoice);

}

buttonRock.onclick = () => {
    userChoice = "rock";
    rockPaperScissors(userChoice);
    // Ask if the player wants to play again


}





// Assign a random choice to the computer 
function computerChoice() {

    let computerNbChoice = Math.floor(Math.random() * 3);

    if (computerNbChoice === 0) {
        computerChoice = "rock"
    } else if (computerNbChoice === 1) {
        computerChoice = "paper"
    } else if (computerNbChoice === 2) {
        computerChoice = "scissors"
    }
    return computerChoice;
}

function rockPaperScissors(choice) {
    let cpChoice = computerChoice();
    //Show the result

    title.src = `img/text-${userChoice}.png`;
    subtext.textContent = `VS ${cpChoice.toUpperCase()}`;
    manFace.className = "man-answer";
    botFace.className = "bot-answer";
    manFace.src = "img/man-playing.svg";
    botFace.src = "img/bot-playing.svg";
    botBubble.src = `img/bot-bubble-${cpChoice}.svg`
    manBubble.src = `img/man-bubble-${userChoice}.svg`

    //Function to show the final result

    // function result() {

    //     if (cpChoice === userChoice) { //if EVEN
    //         title.src = "img/even-game.png";

    //     } else if (userChoice === "scissors" && cpChoice === "paper" ||
    //         userChoice === "paper" && cpChoice === "rock" ||
    //         userChoice === "rock" && cpChoice === "scissors") { //if WIN
    //         title.src = "img/text-win.png";
    //     } else { // if LOST
    //         title.src = "img/text-loose.png";
    //     }
    // }
    // //After some time,compare User & computer value + Show the appropriate message
    // setTimeout(result(), 100000);


}


