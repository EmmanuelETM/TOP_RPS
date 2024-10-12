const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const handleClick = (Event) => {
    console.log(Event.target);
}

rock.addEventListener('click', handleClick);
paper.addEventListener('click', handleClick);
scissors.addEventListener('click', handleClick);






const getComputerChoice = () => {
    let numChoice = Math.floor((Math.random() * 3) + 1);
    if (numChoice === 1) return 'rock'
    else if (numChoice === 2) return 'paper'
    else return 'scissors';
}

const getHumanChoice = () => {
    return prompt(`
        Welcome to rock, paper, scissors.
        Select your move:
        `);
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
    else if (humanChoice === 'rock' && computerChoice === 'scissors'
        || humanChoice === 'paper' && computerChoice === 'rock'
        || humanChoice === 'scissors' && computerChoice === 'paper')
    {
        humanScore++;
        console.log(`You won this round!!\nHuman: ${humanScore} PC: ${computerScore}`)
    }
    else {
        computerScore++;
        console.log(`The computer won this round!!\nHuman: ${humanScore} PC: ${computerScore}`)
    }
}

//const playGame = () => {
//    playRound(getHumanChoice(), getComputerChoice())
//}
