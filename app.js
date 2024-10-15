const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const data = document.querySelector('.data p');
const score = document.querySelector('.data h3');

// Game functions
const getComputerChoice = () => {
    let numChoice = Math.floor((Math.random() * 3) + 1);
    if (numChoice === 1) return 'rock'
    else if (numChoice === 2) return 'paper'
    else return 'scissors';
}

const playRound = (humanChoice, computerChoice) => {
    
    if(playing){
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

        if ((humanScore >= 5 || computerScore >= 5) && !showPrompt) {
            showPrompt = true; 
            setTimeout(() => {
                const continueGame = confirm('You have completed 5 rounds! Do you want to continue?');
                if (continueGame) {
                    handleRestart();
                } else {
                    alert('Thanks for playing!');
                    playing = false;
                }
            }, 500);
        }
    }else {
        //Remove event listeners 
        rock.removeEventListener('click', (Event) => {
            playRound('scissors', getComputerChoice());
        });
        paper.removeEventListener('click', (Event) => {
            playRound('scissors', getComputerChoice());
        });
        scissors.removeEventListener('click', (Event) => {
            playRound('scissors', getComputerChoice());
        });
    }

};

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

const handleRestart = () => {
    humanScore = 0;
    computerScore = 0;
    showPrompt = false;
    score.textContent = `Human: ${humanScore} PC: ${computerScore}`;
    data.textContent =  'Play your move';
};

let playing = true;
let showPrompt = false;
let humanScore = 0;
let computerScore = 0;
score.textContent = `Human: ${humanScore} PC: ${computerScore}`;
data.textContent =  'Play your move';
