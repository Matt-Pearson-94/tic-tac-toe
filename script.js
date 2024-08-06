// Winning combinations: [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]

const playerNameInput = document.querySelector('.player-name-input')
const playerOneInput = document.querySelector('.player-one')
const playerTwoInput = document.querySelector('.player-two')
const nameOne = document.getElementById('name-one')
const nameTwo = document.getElementById('name-two')
const playerOneName = document.querySelector('.player-one-name')
const playerTwoName = document.querySelector('.player-two-name')
const gameBoardContainer = document.querySelector('.gameboard-container')
const playersTurn = document.querySelector('.players-turn')
const playerOneScore = document.querySelector('.player-one-score')
const playerTwoScore = document.querySelector('.player-two-score')
const winnerContainer = document.querySelector('.winner-container')
const winnerInfo = document.querySelector('.winner-info')
const gameBoard = [
    null, null, null, 
    null, null, null, 
    null, null, null
]
let turnsTaken = 0

// Winning combinations
const winningCombo = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]]

let playerOneEntered = false
let playerTwoEntered = false

let crossesTurn = true
let winnerFound = false

// Player name, current squares chosen and current score
let playerOneData = {
    name: "",
    squaresChosen: [],
    score: 0
}

let playerTwoData = {
    name: "",
    squaresChosen: [],
    score: 0
}

// Hides the player screen when names entered 
playerNameInput.addEventListener('click', e => {
    e.target.matches('.player-one-submit') ? (playerOneInput.style.display = 'none') && (playerOneEntered = true) : null
    e.target.matches('.player-two-submit') ? (playerTwoInput.style.display = 'none') && (playerTwoEntered = true) && (playersTurn.textContent = playerOneData.name) : null
    clearScreen()
})

// Clears the background screen when both names are entered
function clearScreen() {
    if (playerOneEntered && playerTwoEntered) {
        playerNameInput.style.display = 'none'
    }
}

// Adds the player names to the respective objects
playerNameInput.addEventListener('click', e => {
    let inputOne = document.getElementById('name-one')
    let inputValueOne = inputOne.value
    let inputTwo = document.getElementById('name-two')
    let inputValueTwo = inputTwo.value
    e.target.matches('.player-one-submit') ? playerOneData.name = inputValueOne : null
    e.target.matches('.player-two-submit') ? playerTwoData.name = inputValueTwo : null
    playerOneName.textContent = playerOneData.name
    playerTwoName.textContent = playerTwoData.name
})

// Drawing the game board
function drawGameboard() {
    gameBoard.forEach((item, index) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.setAttribute('index', index)
        square.style.width = `${400 / 3}px`
        square.style.height = `${400 / 3}px`
        gameBoardContainer.append(square)
    })
}

drawGameboard()

// Updates whose turn it is
function playerTurn() {
    crossesTurn ? playersTurn.textContent = playerOneData.name : playersTurn.textContent = playerTwoData.name
}

playerTurn()

document.addEventListener('click', e => {
    if (e.target.getAttribute('index')) {
        if (crossesTurn) {
            e.target.textContent = 'X'
            e.target.setAttribute('taken', true)
            playerOneData.squaresChosen.push(Number(e.target.getAttribute('index')))
            checkWin(playerOneData)
        } else {
            e.target.textContent = 'O'
            e.target.setAttribute('taken', true)
            playerTwoData.squaresChosen.push(Number(e.target.getAttribute('index')))
            checkWin(playerTwoData)
        }
        turnsTaken++
        crossesTurn ? crossesTurn = false : crossesTurn = true
        playerTurn()
    }
})

// Checking to see if there has been a win
function checkWin(combo) {
    let foundWinner = 0 
    for (i = 0; i < winningCombo.length; i++) {
        winningCombo[i].forEach(item => {
            combo.squaresChosen.includes(item) ? foundWinner++ : null
        })
        foundWinner === 3 ? (combo.score++, displayWinner(combo.name), winnerFound = true) : null
        foundWinner = 0
    }
}



// Displays the winner and restarts the game
function displayWinner(winner) {
    winnerInfo.textContent = `${winner} wins!`
    playerOneScore.textContent = playerOneData.score
    playerTwoScore.textContent = playerTwoData.score
    playerOneData.squaresChosen = []
    playerTwoData.squaresChosen = []
    winnerContainer.style.display = 'flex'
}

function refresh() {
    crossesTurn = true
    playerTurn()
    const squares = document.querySelectorAll('.square')
    squares.forEach(square  => {
    square.textContent = ''
    winnerContainer.style.display = 'none'
    turnsTaken = 0
    winnerFound = false
    })
}

// Check for draw
document.addEventListener('click', e => {
    if (e.target.getAttribute('index')) {
        if (turnsTaken === 9 && winnerFound === false) {
            winnerContainer.style.display = 'flex'
            winnerInfo.textContent = `It's a tie game.`
            playerOneData.squaresChosen = []
            playerTwoData.squaresChosen = []
        }
    }
})

