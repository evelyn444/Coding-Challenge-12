// Task 2: Configure the JavaScript for Drawing Context
const canvas = document.getElementById('drawingCanvas'); //canvas set up
const ctx = canvas.getContext('2d'); // context set up

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

//Task 3: Implement Shape Drawing Logic
function drawShape(shape, x1, y1, x2, y2){
    ctx.beginPath();
    ctx.strokeStyle= colorPicker.value;

    if(shape === 'line'){ //line 
        ctx.moveTo (x1,y1);
        ctx.lineTo (x2,y2);
    } else if (shape === 'rectangle'){ //rectangle
        const width = x2 - x1;
        const height = y2 - y1;
        ctx.rect(x1, y1, width, height);
    } else if (shape === 'circle'){ // circle
        const radius = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        ctx.arc(x1, y1, radius, 0, 2 * Math.PI);
    }
    ctx.stroke(); 
};
// Add Color Selection and Canvas Clearing
colorPicker.addEventListener('input', () => { //updates color when selected
    ctx.strokeStyle = colorPicker.value;
});
const clearButton = document.getElementById('clearCanvas'); //clear button
clearButton.addEventListener('click', () => {
    ctx.clearRect(0,0, canvas.width, canvas.height);
});