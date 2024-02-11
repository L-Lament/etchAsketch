const gridSize = 400
const sketchArea = document.getElementById('sketchArea')
sketchArea.style.width = `${gridSize}px`
sketchArea.style.height = `${gridSize}px`
let cells = prompt('Choose your starting size')

//make grid
function makeGrid (cells) {
    for (let i = 0; i < (cells * cells); i++) {
        const gridCell = document.createElement('div');
        gridCell.id = 'cell'
        gridCell.className = 'empty'
        gridCell.style.width = `${gridSize/cells - 2}px`
        gridCell.style.height = `${gridSize/cells - 2}px`
        sketchArea.appendChild(gridCell)
    }
}
makeGrid(cells)

//make new grid with user input


//If cell is hovered over, change background color to black
const cell = document.querySelectorAll('#cell')
const checkHover = () => {
    cell.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('class', 'filled')
        })
    });
    
}
checkHover()

//Make reset button to clear filled cells
const resetButton = document.getElementById('resetButton')
const resetGrid = () => {
    resetButton.addEventListener('click', () => {
        cell.forEach(cell =>{
            cell.setAttribute('class', 'empty')
        })
    })
    // makeGrid(cells)
}
resetGrid()




