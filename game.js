function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let value = "";
    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    let user_input = prompt("Rock, paper or scissors? ")
    return user_input;
}
let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) { // 3 combinations are handled with this conditional statement
        console.log("It's a draw.")
    }
    if (humanChoice != computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You won! Rock beats Scissors.")
            ++humanScore;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors.")
            ++computerScore;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You won! Paper beats Rock.")
            ++humanScore;
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats Rock.")
            ++computerScore;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You won! Scissors beats Paper.")
            ++humanScore;
        }
        else {
            console.log("You lose! Scissors beats Paper.")
            ++computerScore;
        }
    }
}
playRound(humanChoice, computerChoice);
