// Winning combinations: [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]

const container = document.querySelector('.container')
const cells = document.createElement('div')
const info = document.querySelector('.instruction')

let go = 'cross'
let instructions = 'Cross\'s turn'

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
        console.log(index) // Need to know which cell is what so we can determine winning combo
        go = (go === 'cross') ? 'circle' : 'cross'
        instructions = (instructions === 'Cross\'s turn') ? 'Naught\'s turn' : 'Cross\'s turn'
        info.textContent = instructions
        item.removeEventListener('click', event)
    })
})


// cell0.addEventListener("click", choice)

// function choice() {
//     const selection = document.createElement('div')
//     selection.classList.add(`${go}`)
//     cell0.appendChild(selection)
//     cell0.removeEventListener("click", choice)
// }
