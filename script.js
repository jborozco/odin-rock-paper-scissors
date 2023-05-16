



// Define element for Querries + UI
let buttonPaper = document.querySelector('#buttonPaper');
let buttonScissors = document.querySelector('#buttonScissors');
let buttonRock = document.querySelector('#buttonRock');
let buttonYes = document.querySelector('#buttonYes');
let buttonNo = document.querySelector('#buttonNo');
let buttons1 = document.querySelector('#buttons');
let buttons2 = document.querySelector('#buttons-restart');
let title = document.querySelector('#text-prompt .title img');
let subtext = document.querySelector('#text-prompt p');
let buttons = document.querySelector('#buttons');
let manFace = document.querySelector('#man-face img');
let botFace = document.querySelector('#bot-face img');
let manFaceBox = document.querySelector('#man');
let botFaceBox = document.querySelector('#bot');
let manBubble = document.querySelector('#man .bubble img');
let botBubble = document.querySelector('#bot .bubble img');
let container = document.querySelector('#container');
let manVsBot = document.querySelector('#manVsBot');







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

//Show the result

let cpChoice = "";
function rockPaperScissors(choice) {
    cpChoice = computerChoice();
    title.src = `img/text-${userChoice}.png`;
    subtext.textContent = `VS ${cpChoice.toUpperCase()}`;
    manFace.className = "man-answer";
    botFace.className = "bot-answer";
    manFace.src = "img/man-playing.svg";
    botFace.src = "img/bot-playing.svg";
    botBubble.src = `img/bot-bubble-${cpChoice}.svg`
    manBubble.src = `img/man-bubble-${userChoice}.svg`
}

//Function to show the final result

function showResult(userChoice) {
    setTimeout(function () { //time out the final result

        //Reset faces animation
        manFace.className = "";
        botFace.className = "";
        subtext.textContent = `Try again?`;
        buttons1.className = "btn-hide";
        buttons2.className = "";



        //Show the restart buttons

        //Display UI for result of the game
        if (cpChoice == userChoice) { //if EVEN
            title.src = "img/text-evengame.png";
            manFace.src = "img/man-neutral.svg";
            botFace.src = "img/bot-neutral.svg";

        } else if (userChoice == "scissors" && cpChoice == "paper" ||
            userChoice == "paper" && cpChoice == "rock" ||
            userChoice == "rock" && cpChoice == "scissors") { //if WIN
            title.src = "img/text-win.png";
            manFace.src = "img/man-win.svg";
            botFace.src = "img/bot-loose.svg";
            container.style.backgroundColor = "#FFE1DB";

        } else { // if LOST
            title.src = "img/text-loose.png";
            manFace.src = "img/man-loose.svg";
            botFace.src = "img/bot-win.svg";
            container.style.backgroundColor = "#DBF4FF";

        }
        console.log(`p:${userChoice} c:${cpChoice}`);


    }, 2000);
}


// Define User choice based on the chosen button
let userChoice;

buttonPaper.onclick = () => {
    userChoice = "paper";
    rockPaperScissors(userChoice);
    showResult(userChoice);
}

buttonScissors.onclick = () => {
    userChoice = "scissors";
    rockPaperScissors(userChoice);
    showResult(userChoice);

}

buttonRock.onclick = () => {
    userChoice = "rock";
    rockPaperScissors(userChoice);
    showResult(userChoice);

}

buttonYes.onclick = () => {
    location.reload();
}

buttonNo.onclick = () => {
    buttons1.className = "btn-hide";
    buttons2.className = "btn-hide";
    title.src = "img/thanks.png";
    manVsBot.style.display = "none";
    subtext.innerHTML = `Game made by <a href="https://github.com/jborozco">@jborozco</a> for the <a href="https://www.theodinproject.com/">Odin project</a>.`;
}
