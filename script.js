// Winning combinations: [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]

const container = document.querySelector('.container')
const cells = document.createElement('div')
const info = document.querySelector('.instruction')

// 1 is cross
// 0 is naught

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
        console.log(index) // Need to know which cell is what so we can determine winning combo
        go = (go === 'cross') ? 'circle' : 'cross'
        instructions = (instructions === 'Cross\'s turn') ? 'Naught\'s turn' : 'Cross\'s turn'
        info.textContent = instructions
        if (go === 'cross') {
            naughtChoices.push(index)
        } else {
            crossChoices.push(index)
        }
        item.removeEventListener('click', event)
        arraysMatch(crossChoices)

    })
})

function arraysMatch(arr1) {
    	if (arr1.length !== 3) return false;
    	for (var i = 0; i < arr1.length; i++) {
            arr1.sort()
    		if (arr1[i] !== winningCombinations[0][i]) return false;
    	}
    
    	// Otherwise, return true
    	console.log('winner');
    
    };


// function arraysMatch(arr1, arr2) {
// 	if (arr1.length !== arr2.length) return false;
// 	for (var i = 0; i < arr1.length; i++) {
//         arr2.sort()
// 		if (arr1[i] !== arr2[i]) return false;
// 	}

// 	// Otherwise, return true
// 	console.log('winner');

// };

let array1 = [1,2,3],
    array2 = [1,2,3,4],
    array3 = [1,2];

let checker = (arr, target) => target.every(v => arr.includes(v));

console.log(checker(array2, array1));  // true
console.log(checker(array3, array1));  // false