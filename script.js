// Winning combinations: [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]

const playerNameInput = document.querySelector('.player-name-input')
const playerOneInput = document.querySelector('.player-one')
const playerTwoInput = document.querySelector('.player-two')
const nameOne = document.getElementById('name-one')
const nameTwo = document.getElementById('name-two')
const playerOneName = document.querySelector('.player-one-name')
const playerTwoName = document.querySelector('.player-two-name')
const gameBoardContainer = document.querySelector('.gameboard-container')
const gameBoard = [null, null, null, null, null, null, null, null, null]

let playerOneEntered = false
let playerTwoEntered = false

// Player name and current squares chosen
playerOneData = {
    name: "",
    squaresChosen: []
}

playerTwoData = {
    name: "",
    squaresChosen: []
}

// Hides the player screen when names entered 
playerNameInput.addEventListener('click', e => {
    e.target.matches('.player-one-submit') ? (playerOneInput.style.display = 'none') && (playerOneEntered = true) : null
    e.target.matches('.player-two-submit') ? (playerTwoInput.style.display = 'none') && (playerTwoEntered = true) : null
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
        // square.style.width = `${(gameBoard.length() / 9)}px`
        square.style.height = `${gameBoard.length()}px`
        gameBoardContainer.append(square)
    })
}

drawGameboard()