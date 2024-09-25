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

let humanScore, computerScore = 0;


const playRound = (humanChoice, computerChoice) => {
    try {
        humanChoice = humanChoice.toLowerCase()
    } catch (error) {
        return error
    }

    if(humanChoice === computerChoice) return 'tie'
    else if (humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissors' && computerChoice == 'paper') 
    {
        humanScore++;
        return 'human'
    }
    else {
        computerScore++;
        return 'computer';
    }
} 


console.log(playRound(getHumanChoice(), getComputerChoice()))