// Game functions

const getComputerChoice = () => {
    let numChoice = Math.floor((Math.random() * 3) + 1);
    if (numChoice === 1) return 'rock'
    else if (numChoice === 2) return 'paper'
    else return 'scissors';
}

const playRound = (humanChoice, computerChoice) => {

    if(humanChoice === computerChoice) {
        score.textContent = `Human: ${humanScore} PC: ${computerScore}`;
        data.textContent = 'Tie!!';
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors'
        || humanChoice === 'paper' && computerChoice === 'rock'
        || humanChoice === 'scissors' && computerChoice === 'paper')
    {
        humanScore++;
        score.textContent = `Human: ${humanScore} PC: ${computerScore}`;
        data.textContent = 'You won this round!!';
    }
    else {
        computerScore++;
        score.textContent = `Human: ${humanScore} PC: ${computerScore}`;
        data.textContent = 'The computer won this round!!';
    }
}

let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const data = document.querySelector('.data p');
const score = document.querySelector('.data h3');
const restart = document.querySelector('.data button');


const playGame = () => {
    //Event listeners

    rock.addEventListener('click',  (Event) => {
        playRound('rock', getComputerChoice());
    });

    paper.addEventListener('click', (Event) => {
        playRound('paper', getComputerChoice());
    });

    scissors.addEventListener('click', (Event) => {
        playRound('scissors', getComputerChoice());
    });

    restart.addEventListener('click', () => {
        console.log('restart clicked');
        humanScore = 0;
        computerScore = 0;
        score.textContent = `Human: ${humanScore} PC: ${computerScore}`;
        data.textContent =  'Play your move';
    })


}

score.textContent = `Human: ${humanScore} PC: ${computerScore}`;
data.textContent =  'Play your move';
playGame();