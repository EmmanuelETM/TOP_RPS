const getComputerChoice = () => {
    let numChoice = Math.floor((Math.random() * 3) + 1);
    if (numChoice === 1) return 'rock'
    else if (numChoice === 2) return 'paper'
    else return 'scissors';
}

const getHumanChoice = () => {
    const choice = prompt(`
        Welcome to rock, paper, scissors.
        Select your move:
        `);
    return choice;
}

let humanScore = 0;
let computerScore = 0;


const playRound = (humanChoice, computerChoice) => {
    try {
        humanChoice = humanChoice.toLowerCase()
    } catch (error) {
        return error
    }

    if(humanChoice === computerChoice) console.log(`Tie!!\nHuman: ${humanScore} PC: ${computerScore}`) 
    else if (humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissors' && computerChoice == 'paper') 
    {
        humanScore++;
        console.log(`You won this round!!\nHuman: ${humanScore} PC: ${computerScore}`)
    }
    else {
        computerScore++;
        console.log(`The computer won this round!!\nHuman: ${humanScore} PC: ${computerScore}`)
    }
} 

const playGame = () => {
    let count = 0;
    while (count < 5) {
        count++;
        if (humanScore >= 3 || computerScore >= 3) {
            if (humanScore > computerScore) console.log("The human won the game!!")
            else console.log("The computer won the game!!")
            break;
        }
        playRound(getHumanChoice(), getComputerChoice())
    }
}

playGame();