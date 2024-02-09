const sketchArea = document.getElementById('sketchArea')
const gridSize = 600
sketchArea.style.width = `${gridSize}px`
sketchArea.style.height = `${gridSize}px`

let row = 20
let col = 20


for (let i = 0; i < (row * col); i++) {
    const gridCell = document.createElement('div');
    gridCell.className = 'gridCell'
    gridCell.style.width = `${gridSize/row -2}px`
    gridCell.style.height = `${gridSize/row -2}px`
    sketchArea.appendChild(gridCell)
}
console.log(gridCell.width);