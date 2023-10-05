const body = document.body;
let container = document.createElement('div');
container.classList.add('container');


body.appendChild(container);
let gridSize = 16;
const squareSize = `${100 / gridSize}%`
for (i = 0; i < gridSize * gridSize; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    squareDiv.style.width = squareSize;
    squareDiv.style.height = squareSize;
    container.appendChild(squareDiv);

}
container.addEventListener('mousedown', function(event) {
    if (event.target.classList.contains('square')) {
        event.target.style.backgroundColor = 'blue'; // Change the color as needed
    }
});
container.addEventListener('mouseover', function(event) {
    if (event.buttons === 1 && event.target.classList.contains('square')) {
        event.target.style.backgroundColor = 'blue'; // Change the color as needed
    }
});


const square = document.getElementsByClassName('square')