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

let humanScore = 0;
let computerScore = 0;

let resultContainer = document.querySelector("#resultContainer");

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) { // 3 combinations are handled with this conditional statement
        resultContainer.textContent = "It's a draw.";
    }
    if (humanChoice != computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors") {
            resultContainer.textContent = "You won! Rock beats Scissors.";
            ++humanScore;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            resultContainer.textContent = "You lose! Rock beats Scissors.";
            ++computerScore;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            resultContainer.textContent = "You won! Paper beats Rock.";
            ++humanScore;
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            resultContainer.textContent = "You lose! Paper beats Rock.";
            ++computerScore;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            resultContainer.textContent = "You won! Scissors beats Paper.";
            ++humanScore;
        }
        else {
            resultContainer.textContent = "You lose! Scissors beats Paper.";
            ++computerScore;
        }
    }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", function () {
    playRound("rock", getComputerChoice())
    displayResult();
    decideWinner();
});

paperBtn.addEventListener("click", function () {
    playRound("paper", getComputerChoice())
    displayResult();
    decideWinner();
});

scissorsBtn.addEventListener("click", function () {
    playRound("scissors", getComputerChoice())
    displayResult();
    decideWinner();
});

function displayResult() {
    resultContainer.innerHTML += ` <p>User Score: ${humanScore} Computer Score: ${computerScore}</p>`;
}
function decideWinner() {
    if (computerScore == 5 || humanScore == 5) {
        resultContainer.innerHTML += computerScore > humanScore ? "<p> Winner : Computer </p>" : "<p> Winner : User </p>";
        computerScore = 0;
        humanScore = 0;
    }
}
