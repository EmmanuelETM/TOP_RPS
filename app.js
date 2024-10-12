let contentDiv = document.querySelector('.content');
let dataDiv = document.createElement('div');
let movesDiv = document.createElement('div');
// dataDiv.classList.add('data');
// movesDiv.classList.add('moves');
// movesDiv.textContent = 'moves';

contentDiv.appendChild(dataDiv);
contentDiv.appendChild(movesDiv);

// Rock, Paper and Scissors div
let rockDiv = document.createElement('div');
let rockImg = document.createElement('img');
rockImg.src = './images/rock.png';
rockImg.width = 100;
rockImg.height = 100;
rockDiv.appendChild(rockImg);

let paperDiv = document.createElement('div');
let paperImg = document.createElement('img');
paperImg.src = './images/paper.png';
paperImg.width = 100;
paperImg.height = 100;
paperDiv.appendChild(paperImg);


let scissorsDiv = document.createElement('div');
let scissorsImg = document.createElement('img');
scissorsImg.src = './images/scissors.png';
scissorsImg.width = 100;
scissorsImg.height = 100;
scissorsDiv.appendChild(scissorsImg);


let choiceArr= [rockDiv, paperDiv, scissorsDiv];
choiceArr.forEach((choice) => movesDiv.appendChild(choice));




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
