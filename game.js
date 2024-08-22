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