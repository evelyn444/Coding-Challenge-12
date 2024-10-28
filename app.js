// Task 2: Configure the JavaScript for Drawing Context
const canvas = document.getElementById('drawingCanvas'); //canvas set up
const context = canvas.getContext('2d'); // context set up

let isDrawing = false;
let startX, startY;

const shapeSelector = document.querySelectorAll('input [name="shape"]'); //color and tool selector
const colorPicker = document.getElementById('colorPicker');
let selectedShape = 'line';

shapeSelector.forEach(option => {
option.addEventListener('change', () => {
    selectedShape= document.querySelector('input[name="shape"]: checked').value; //updates selected shape when selected
});
});

canvas.addEventListener('mousedown', (event) => { //starts drawing mouse down
    isDrawing = true;
    startX = event.offsetX;
    startY = event.offsetY;
});

canvas.addEventListener('mouseup', (event) =>{ // stops drawing mouse up
    if(!isDrawing) return;
    isDrawing = false;
    const endX = event.offsetX;
    const endY = event.offsetY;
    drawShape(selectedShape, startX, startY, endX, endY); //draw shape
});