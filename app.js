const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const data = document.querySelector('.data-p');
const score = document.querySelector('.data h3');
const moves = document.querySelector('.moves-p');
const restart = document.querySelector('.data button');


// Game functions
const getComputerChoice = () => {
    let numChoice = Math.floor((Math.random() * 3) + 1);
    if (numChoice === 1) return 'rock'
    else if (numChoice === 2) return 'paper'
    else return 'scissors';
}

const playRound = (humanChoice, computerChoice) => {

    if (playing && humanScore < 5 && computerScore < 5) {
        if (humanChoice === computerChoice) {
            score.textContent = `Human: ${humanScore} PC: ${computerScore}`;
            moves.textContent = `${humanChoice} vs ${computerChoice}`;
            data.textContent = 'Tie!!';
        }
        else if (humanChoice === 'rock' && computerChoice === 'scissors'
            || humanChoice === 'paper' && computerChoice === 'rock'
            || humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
            score.textContent = `Human: ${humanScore} PC: ${computerScore}`;
            moves.textContent = `${humanChoice} vs ${computerChoice}`;
            data.textContent = 'You won this round!!';
        }
        else {
            computerScore++;
            score.textContent = `Human: ${humanScore} PC: ${computerScore}`;
            moves.textContent = `${humanChoice} vs ${computerChoice}`;
            data.textContent = 'The computer won this round!!';
        }



        if ((humanScore >= 5 || computerScore >= 5) && !showPrompt) {
            showPrompt = true;
            setTimeout(() => {
                let continueGame;

                if (humanScore > computerScore) {
                    continueGame = confirm('You won the Game!! Wanna play again?');
                } else {
                    continueGame = confirm('The computer won, bwomp!! Wanna play again?');
                }

                if (continueGame) {
                    handleRestart();
                } else {
                    alert('Thanks for playing!');
                    playing = false;
                }
            }, 200);
        }

    } else {
        removeMoveEvents();
    }

};

// Event Handlers

const handleRestart = () => {
    humanScore = 0;
    computerScore = 0;
    showPrompt = false;
    playing = true;
    score.textContent = `Human: ${humanScore} PC: ${computerScore}`; 
    moves.textContent = ' vs ';
    data.textContent = 'Play your move';
};

const addMoveEvents = () => {
    rock.addEventListener('click', (Event) => {
        playRound('rock', getComputerChoice());
    });

    paper.addEventListener('click', (Event) => {
        playRound('paper', getComputerChoice());
    });

    scissors.addEventListener('click', (Event) => {
        playRound('scissors', getComputerChoice());
    });
};

const removeMoveEvents = () => {
    rock.removeEventListener('click', (Event) => {
        playRound('scissors', getComputerChoice());
    });
    paper.removeEventListener('click', (Event) => {
        playRound('scissors', getComputerChoice());
    });
    scissors.removeEventListener('click', (Event) => {
        playRound('scissors', getComputerChoice());
    });
};

restart.addEventListener('click', () => {
    handleRestart();
    addMoveEvents();
});


let playing = true;
let showPrompt = false;
let humanScore = 0;
let computerScore = 0;
score.textContent = `Human: ${humanScore} PC: ${computerScore}`;
moves.textContent = ' vs ';
data.textContent = 'Play your move';

restart.click();