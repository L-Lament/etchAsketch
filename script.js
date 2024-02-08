const sketchArea = document.getElementById('sketchArea');

let gridSize = 600;
let rows = 16;
let cols = 16;

for (let i = 0; i < (rows * cols); i++) {
    const gridCell = document.createElement('div')
    gridCell.setAttribute('class', 'gridCell')
    gridCell.style.width = `${gridSize / rows - 2}px`    
    gridCell.style.width = `${gridSize / cols - 2}px`    
    sketchArea.appendChild(gridCell)
}