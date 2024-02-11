const sketchArea = document.getElementById('sketchArea')
const gridSize = 600
sketchArea.style.width = `${gridSize}px`
sketchArea.style.height = `${gridSize}px`

let row = 16
let col = 16


for (let i = 0; i < (row * col); i++) {
    const gridCell = document.createElement('div');
    gridCell.id = 'cell'
    gridCell.style.width = `${gridSize/row -2}px`
    gridCell.style.height = `${gridSize/row -2}px`
    sketchArea.appendChild(gridCell)
}

const singleCell = document.querySelector('.gridCell')

const hoveredCell = document.querySelectorAll('#cell')

hoveredCell.forEach(hoveredCell => {
    hoveredCell.addEventListener('mouseover', () => {
        hoveredCell.setAttribute('class', 'filled')
    })
})

//another way to make it work
// for (let i = 0; i < row; i++) {
//     const gridCell = document.createElement('div');
//     gridCell.className = 'gridCell'
//     gridCell.style.width = `${gridSize/row -2}px`
//     gridCell.style.height = `${gridSize/row -2}px`
//     sketchArea.appendChild(gridCell)
    
    
//     for (let j = 1; j < col; j++) {
//         const gridCell = document.createElement('div');
//         gridCell.className = 'gridCell'
//         gridCell.style.width = `${gridSize/row -2}px`
//         gridCell.style.height = `${gridSize/row -2}px`
//         sketchArea.appendChild(gridCell)
        
        
//     }
// }


