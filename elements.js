let contentDiv = document.querySelector('.content');
let dataDiv = document.createElement('div');
let movesDiv = document.createElement('div');

dataDiv.classList.add('data');
movesDiv.classList.add('moves');

// Moves div
let rockDiv = document.createElement('div');
let rockText = document.createElement('p');
let rockImg = document.createElement('img');

rockDiv.classList.add('rock');
rockText.textContent = "Rock";
rockImg.src = './images/rock.png';
rockDiv.appendChild(rockImg);
rockDiv.appendChild(rockText);

let paperDiv = document.createElement('div');
let paperText = document.createElement('p');
let paperImg = document.createElement('img');

paperDiv.classList.add('paper');
paperText.textContent = 'Paper';
paperImg.src = './images/paper.svg';
paperDiv.appendChild(paperImg);
paperDiv.appendChild(paperText);


let scissorsDiv = document.createElement('div');
let scissorsText = document.createElement('p');
let scissorsImg = document.createElement('img');

scissorsDiv.classList.add('scissors');
scissorsText.textContent = 'Scissors';
scissorsImg.src = './images/scissors.png';
scissorsDiv.appendChild(scissorsImg);
scissorsDiv.appendChild(scissorsText);


movesDiv.appendChild(rockDiv);
movesDiv.appendChild(paperDiv);
movesDiv.appendChild(scissorsDiv);


// Data div
let restartButton = document.createElement('button');
restartButton.textContent = 'Restart';
let scoreH3 = document.createElement('h3');
let movesP = document.createElement('p'); 
movesP.classList.add('moves-p')
let dataP = document.createElement('p');
dataP.classList.add('data-p');

dataDiv.appendChild(scoreH3);
dataDiv.appendChild(movesP);
dataDiv.appendChild(dataP);
dataDiv.appendChild(restartButton);


contentDiv.appendChild(dataDiv);
contentDiv.appendChild(movesDiv);
