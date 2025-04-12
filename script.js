const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const scoreContainerBox = document.querySelector("#scoreContainerBox");
const playerScoreBox = document.querySelector("#playerScoreBox");
const computerScoreBox = document.querySelector("#computerScoreBox");
const finalResultsBox = document.querySelector("#finalResultsBox");

const drawText = document.createElement("span");
drawText.textContent = "\n This round was a draw.";

const btnList = [rockBtn, paperBtn, scissorsBtn];



let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function getComputerChoice() {
   
    const computerRandomChoice = Math.floor(Math.random() * 3);
   
    return computerRandomChoice;
}


function playRound(humanChoice, computerChoice) { 

    if (playerScore === 5 || computerScore === 5){
        playerScore = 0;
        computerScore = 0;
        playerScoreBox.textContent = "You:";
        computerScoreBox.textContent = "Computer:";
    }
    
    finalResultsBox.textContent = "Result:"
    
    if (scoreContainerBox.contains(drawText)){
        
        scoreContainerBox.removeChild(drawText);
    }

   
    if (humanChoice === `rock`) {
        humanChoice = 0;
    } else if (humanChoice === `paper`) {
        humanChoice = 1;
    } else if (humanChoice === `scissors`) {
        humanChoice = 2;
    }
    
    let winner;
   
    if (humanChoice === 0 && computerChoice === 0) {
    
        draw = true;
        scoreContainerBox.appendChild(drawText);

    } else if (humanChoice === 0 && computerChoice === 1) {
        
        computerScore += 1;
        computerScoreBox.textContent = `Computer: ${computerScore}`;
        
    } else if (humanChoice === 0 && computerChoice === 2) {
        
        playerScore += 1;
        playerScoreBox.textContent = `You: ${playerScore}`;
        
    } else if (humanChoice === 1 && computerChoice === 0) {
        
        playerScore += 1;
        playerScoreBox.textContent = `You: ${playerScore}`;
        
    } else if (humanChoice === 1 && computerChoice === 1) {
    
        draw = true;
        scoreContainerBox.appendChild(drawText);
        
    } else if (humanChoice === 1 && computerChoice === 2) {
        
        computerScore += 1;
        computerScoreBox.textContent = `Computer: ${computerScore}`;
        
    } else if (humanChoice === 2 && computerChoice === 0) {
        
        computerScore += 1;
        computerScoreBox.textContent = `Computer: ${computerScore}`;

    } else if (humanChoice === 2 && computerChoice === 1) {
        
        playerScore += 1;
        playerScoreBox.textContent = `You: ${playerScore}`;
        
    } else if (humanChoice === 2 && computerChoice === 2) {
    
        draw = true;
        scoreContainerBox.appendChild(drawText);
    }
    
    checkScoreForWinner();
}

function checkScoreForWinner() {

    
    
    if (playerScore === 5) {
        finalResultsBox.textContent = "Result: You win!";
    } else if (computerScore === 5) {
        finalResultsBox.textContent = "Result: Computer wins. Nice try!";
    }
}

for (let i = 0; i <= (btnList.length - 1); i++){
    btnList[i].addEventListener("mouseenter", () =>{
        btnList[i].style.border = "2px solid blue";
    })
}

for (let i = 0; i <= (btnList.length - 1); i++){
    btnList[i].addEventListener("mouseleave", () =>{
        btnList[i].style.border = "";
    })
}



rockBtn.addEventListener("click", () =>{
   roundWinner = playRound("rock", getComputerChoice());
   
});

paperBtn.addEventListener("click", () =>{
    roundWinner = playRound("paper", getComputerChoice());
    
});

scissorsBtn.addEventListener("click", () =>{
    roundWinner = playRound("scissors", getComputerChoice());
    
});









