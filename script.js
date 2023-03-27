// Winning combinations: [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]

const body = document.querySelector('body')
const container = document.querySelector('.container')
const cells = document.createElement('div')
const info = document.querySelector('.instruction')

let turn = 1
let go = 'cross'
let instructions = 'Cross\'s turn'
let crossChoices = []
let naughtChoices = []
const winningCombinations = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]]

const boardCells = [ "", "", "", 
                    "", "", "", 
                    "", "", ""]

function createBoard() {
    boardCells.forEach((cell, index) => {
        const cells = document.createElement('div')
        cells.classList.add('cells')
        container.appendChild(cells)
        cells.setAttribute("id", index)
        // document.getElementById(index).addEventListener("click", choice)
    })
}

createBoard()

document.querySelectorAll('.cells').forEach((item, index) => {
    item.addEventListener('click', event => {
        const selection = document.createElement('div')
        selection.classList.add(`${go}`)
        item.appendChild(selection)
        go = (go === 'cross') ? 'circle' : 'cross'
        instructions = (instructions === 'Cross\'s turn') ? 'Naught\'s turn' : 'Cross\'s turn'
        info.textContent = instructions
        if (go === 'cross') {
            naughtChoices.push(index)
        } else {
            crossChoices.push(index)
        }
        arraysMatch(crossChoices)
        arraysMatch2(naughtChoices)
    })
})

// This function check if crosses has a winning combination
function arraysMatch(arr1) {
    for (let i = 0; i < winningCombinations.length; i++) {
        let containsAll = winningCombinations[i].every(i => arr1.includes(i));
        if (containsAll === true) {
            const popUp = document.createElement('div')
            body.appendChild(popUp)
            popUp.classList.add('winner')
            popUp.textContent = `Crosses win!`
            popUp.style.color = 'blue'
        }
    }
}

// This function checks if naughts has a winning combination
function arraysMatch2(arr1) {
    for (let i = 0; i < winningCombinations.length; i++) {
        let containsAll = winningCombinations[i].every(i => arr1.includes(i));
        if (containsAll === true) {
            const popUp = document.createElement('div')
            body.appendChild(popUp)
            popUp.classList.add('winner')
            popUp.textContent = `Naughts win!`
            popUp.style.color = 'red'
        }
    }
}


