// Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.querySelectorAll('.cell');
let scaleBtn = document.querySelector(".scale");
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
    
    if (event.type === 'mouseover' && mouseDown === true) 
    {
        console.log("NO, mousedown: " + mouseDown);
        event.target.classList.add("hover");
    } 
    else {
        console.log("YES, mousedown: " + mouseDown);
    }
};

// WORKING function that changes div color uponed being hovered
// function hoverColor() {
//     let cells = document.querySelectorAll('.cell');
//     cells.forEach(cell => {
//       cell.addEventListener("mouseover", () => {
//         cell.classList.add("hover");
//       });
//     });
//   }



//function that prompts user to change scale which changes the # of grids  
function scaleChange(event){
    squares = prompt("Please enter the number of squares per side (100 max):", "16")
    if(squares <= 100){
        resetGrid();
        newGrid(squares); 
    } else{
        alert("Please make sure number is no more than 100");
        return;
    };

}

function resetGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

scaleBtn.addEventListener('click', scaleChange); 
newGrid(squares); //calls the function to create a default grid

