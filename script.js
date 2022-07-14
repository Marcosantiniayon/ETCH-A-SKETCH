// Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.querySelectorAll('.cell');
let scaleBtn = document.querySelector(".scale");
let colorBtn = document.querySelector(".colorBtn");
let rainbowBtn = document.querySelector(".rainbowBtn");
let eraserBtn = document.querySelector(".eraserBtn");
let clearBtn = document.querySelector(".clearBtn");
let colorChoice =  document.getElementById("colorPicker").value;

let squares = 16;

// Creates a default grid sized 16x16
function newGrid(squares) {
    makeRows(squares);
    makeColumns(squares);
    //hoverColor();
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
    rowNumb = rowNum-1;
    // Creates rows
    for (r = 0; r <= rowNumb; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

// Creates columns
function makeColumns(cellNum) {
    cellNumb = cellNum-1;
    let rowsLength = rows.length-1;
    for (i = 0; i <= rowsLength; i++) {
        for (j = 0; j <= cellNumb; j++) {
            let newCell = document.createElement("div");
            newCell.addEventListener('mouseover', paint);
            newCell.addEventListener('mousedown', paint);
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};

function paint(event){
    let target = event.target
    if (event.type === 'mouseover' && mouseDown === true) 
    {
        if(colorBtn.classList.contains("active")){
            target.style.backgroundColor = colorChoice;
        }else if( rainbowBtn.classList.contains("active")){
            target.classList.add("hoverRainbow");
            let randomR = Math.floor(Math.random() * 256);
            let randomG = Math.floor(Math.random() * 256);
            let randomB = Math.floor(Math.random() * 256);
            target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
        }else if( eraserBtn.classList.contains("active")){
            target.style.backgroundColor = `darkblue`
        }else {
            target.style.backgroundColor = `rgb(189, 43, 226)`
        }
    } 
    else {
    }
};


function resetGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

document.querySelector("#colorPicker").onchange = e => {
    console.log(e.target.value)
    colorChoice = e.target.value;
    console.log(colorChoice);
 }

//function that prompts user to change scale which changes the # of grids  
function scaleChange(event){
    squares = prompt("Please enter the number of squares per side (100 max):", "16")
    if (squares === null){
        console.log(squares);
        return;
    } else if(squares <= 100){
        resetGrid();
        console.log(squares);
        newGrid(squares); 
    }else{
        alert("Please make sure number is no more than 100");
        console.log(squares);
        return;
    };

}

function removeActive(){
    if(colorBtn.classList.contains("active")){
        colorBtn.classList.remove("active")
    }else if(rainbowBtn.classList.contains("active")){
        rainbowBtn.classList.remove("active")
    }else if(eraserBtn.classList.contains("active")){
        eraserBtn.classList.remove("active")
    }else {
    }
}

scaleBtn.addEventListener('click', () => {
    scaleChange();
}); 

colorBtn.addEventListener('click', () => {
        removeActive();
        colorBtn.classList.add("active");
}); 

rainbowBtn.addEventListener('click', () => {
    removeActive();
    rainbowBtn.classList.add("active");
}); 

eraserBtn.addEventListener('click', () => {
    removeActive();
    eraserBtn.classList.add("active");
}); 

clearBtn.addEventListener('click', () => {
    resetGrid();
    if(squares === null){
        newGrid(16);
    }else {
        newGrid(squares);
    }
}); 

newGrid(squares); //calls the function to create a default grid
