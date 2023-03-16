const container = document.querySelector('.container')
const cells = document.createElement('div')

const go = 'circle'

const boardCells = [ "", "", "", 
                    "", "", "", 
                    "", "", ""]

function createBoard() {
    boardCells.forEach((cell, index) => {
        const cells = document.createElement('div')
        cells.classList.add('cells')
        container.appendChild(cells)
        cells.setAttribute("id", index)
        document.getElementById(index).addEventListener("click", choice)
    })
}

createBoard()

const cell0 = document.getElementById(0)
const cell1 = document.getElementById(1)
const cell2 = document.getElementById(2)
const cell3 = document.getElementById(3)
const cell4 = document.getElementById(4)
const cell5 = document.getElementById(5)
const cell6 = document.getElementById(6)
const cell7 = document.getElementById(7)
const cell8 = document.getElementById(8)

cell0.addEventListener("click", choice)

function choice() {
    const selection = document.createElement('div')
    selection.classList.add(`${go}`)
    cell0.appendChild(selection)
    cell0.removeEventListener("click", choice)
}
