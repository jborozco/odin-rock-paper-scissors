// Define User choice based on the chosen button

let userChoice;

let buttonPaper = document.querySelector('#buttonPaper');
let buttonScissors = document.querySelector('#buttonScissors');
let buttonRock = document.querySelector('#buttonRock');


buttonPaper.onclick = () => {
    userChoice = "paper";
    console.log(userChoice);
    // Ask if the player wants to play again

    let result = window.confirm(rockPaperScissors(userChoice) + `
        
Do you want to play again ? `);

    if (result === true) {
        location.reload()
    }
}

buttonScissors.onclick = () => {
    userChoice = "scissors";
    console.log(userChoice);
    // Ask if the player wants to play again

    let result = window.confirm(rockPaperScissors(userChoice) + `
        
Do you want to play again ? `);

    if (result === true) {
        location.reload()
    }
}

buttonRock.onclick = () => {
    userChoice = "rock";
    console.log(userChoice);
    // Ask if the player wants to play again

    let result = window.confirm(rockPaperScissors(userChoice) + `
        
Do you want to play again ? `);

    if (result === true) {
        location.reload()
    }
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

    //If a correct value is chosen, make the computer choose one of the constant randomly

    //Compare User & computer value + Show the appropriate message

    let cpChoice = computerChoice();
    if (cpChoice === userChoice) {
        return (`Computer: ${computerChoice}
Player: ${userChoice}

EVEN GAME !`);
    } else if (userChoice === "scissors" && cpChoice === "paper" ||
        userChoice === "paper" && cpChoice === "rock" ||
        userChoice === "rock" && cpChoice === "scissors") {
        return (`Computer: ${cpChoice}
Player: ${userChoice} 
                    
YOU WON !`);
    } else {
        return (`Computer: ${cpChoice}
Player: ${userChoice} 

YOU LOST :'(`);
    }



}


