
//TEST to insure script is linked correctly:
// console.log("hello");


// INITIALIZE getComputerChoice
// CALL random method
function getComputerChoice() {
    // CALL Math.random to find computers choice
    let computerRandomChoice = Math.floor(Math.random() * 3);
    // LOG choice to TEST it works
    // console.log(computerRandomChoice);
    // RETURN computers choice
    return computerRandomChoice;
}
// TEST getComputerChoice()
// getComputerChoice();

// INITIALIZE getHumanChoice
function getHumanChoice() {
    // collect user input (rock paper or scissor) 
    let humanInput = prompt("What's your choice?");
    // LOG humanInput 
    console.log(humanInput);
    // return choice
    return humanInput;
}
// TEST getHumanChoice()
/// getHumanChoice();

// CALL getHumanChoice and getComputerChoice. Return human choice and computer choice.

// CREATE playRound function
function playRound(humanChoice, computerChoice) {
    // CONVERT human input to lowercase 
    // so comparisons are insensitive
    // convert users choice to numerical value
    if (humanChoice === `rock`) {
        humanChoice = 0;
    } else if (humanChoice === `paper`) {
        humanChoice = 1;
    } else if (humanChoice === `scissors`) {
        humanChoice = 2;
    }
    // LOG CONVERSION to TEST it worked
    // console.log(`testing the conversion: ${humanChoice}`);

    // Find Winner
    let winner;
    // INCREMENT winners score by 1
    // LOG with message saying who won

    // IF human chose rock and computer chose rock
        // Draw
    // ELSE IF human chose rock and computer chose paper
        // Computer wins
    // ELSE IF human chose rock and computer chose scissors
        // Human wins
    // ELSE IF human chose paper and computer chose rock
        // Human wins
    // ELSE IF human chose paper and computer chose paper
        // Draw
    // ELSE IF human chose paper and computer chose scissors
        // Computer wins
    // ELSE IF human chose scissors and computer chose rock
        // Computer wins
    // ELSE IF human chose scissors and computer chose paper
        // Human wins
    // ELSE IF human chooses scissors and computer chose scissors
        // Draw
    if (humanChoice === 0 && computerChoice === 0) {
        winner = "draw";
    } else if (humanChoice === 0 && computerChoice === 1) {
        winner = "computer";
        console.log(`Computer wins this round. Paper beats rock!`);
    } else if (humanChoice === 0 && computerChoice === 2) {
        winner = "player";
        console.log(`Player wins this round. Rock beats scissors!`);
    } else if (humanChoice === 1 && computerChoice === 0) {
        winner = "player";
        console.log(`Player wins this round. Paper beats rock!`);
    } else if (humanChoice === 1 && computerChoice === 1) {
        winner = "draw";
    } else if (humanChoice === 1 && computerChoice === 2) {
        winner = "computer";
        console.log(`Computer wins this round. Scissors beat paper!`);
    } else if (humanChoice === 2 && computerChoice === 0) {
        winner = "computer";
        console.log(`Computer wins this round. Rock beats scissors!`);
    } else if (humanChoice === 2 && computerChoice === 1) {
        winner = "player";
        console.log(`Player wins this round. Scissors beat paper!`);
    } else if (humanChoice === 2 && computerChoice === 2) {
        winner = "draw";
    }
    // RETURN winner
    return winner;
}

// INITIALIZE playGame
function playGame() {
    // create variables to store player scores
    let playerScore = 0;
    let computerScore = 0;
    // call playRound 5 times to play 5 rounds
    // WHILE playerScore or computerScore are less than 5
        // CALL playRound() and store result
        // IF winner is player INCREMENT playerScore 
            // ELSE IF winner is computer INCREMENT computerScore
           // ELSE IF winner is draw then BREAK
    while (playerScore < 5 && computerScore < 5) {
        let roundWinner = playRound(getHumanChoice().toLowerCase(), getComputerChoice() );
        if (roundWinner === "player") {
            playerScore++;
            console.log(`Player score: ${playerScore}`);
        } else if (roundWinner === "computer") {
            computerScore++;
            console.log(`Computer score: ${computerScore}`);
        } else if (roundWinner === "draw") {
            console.log(`Draw!`);
            continue;
        }
        // IF player has 5 then player wins 
        // ELSE IF computer has five computer wins
        if (playerScore === 5) {
            console.log(`You won! Scoreboard: ${playerScore}` + `-` + computerScore);
            alert(`You won! Scoreboard: ${playerScore}` + `-` + computerScore);
        } else if (computerScore === 5) {
            console.log("Computer wins. Nice try!");
        }
    }
}

playGame();