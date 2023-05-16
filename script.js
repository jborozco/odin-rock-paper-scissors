// Ask the user to input one of them, make it non case sensitive
//let userChoice = prompt('Please choose between "Rock", "Paper","Scissors"', "").toLowerCase();


let checkUserChoice;



// Verify that the value entered by the user is correct 

function checkChoice(choice) {

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        checkUserChoice = true;
    } else {
        checkUserChoice = false;
    }

    return checkUserChoice;
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
    checkChoice(choice);

    //If a correct value is chosen, make the computer choose one of the constant randomly
    if (checkUserChoice) {
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
    //If the value is not right show an error message and ask the user to try again
    else {
        return ("Game off ! Please enter a correct value...");

    }
}

// Ask if the player wants to play again

let result = window.confirm(rockPaperScissors(userChoice) + `
        
Do you want to play again ? `);

if (result === true) {
    location.reload()
}
