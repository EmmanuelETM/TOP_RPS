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
let rules = {
    rock: 'paper',
    paper: 'scissors',
    scissors: 'rock',
}

console.log(rules)
const playRound = (rules, humanChoice, computerChoice) => {
    humanChoice.toLowerCase()
    if(humanChoice != 'rock' || humanChoice != 'paper' || humanChoice != 'scissors') return `Error:  ${humanChoice} is not an option try again`


} 


// console.log(playRound(rules, getHumanChoice(), getComputerChoice()))