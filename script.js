// Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let pixelButton = document.getElementsByClassName("pixel");

// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(20);
    makeColumns(20);
    hoverColor();
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

// Creates columns
function makeColumns(cellNum) {
    cellNumb = cellNum-1;
    let rowsLength = rows.length-1;
    for (i = 0; i <= rowsLength; i++) {
        for (j = 0; j <= cellNumb; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

//function that changes div color uponed being hovered
function hoverColor() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.addEventListener("mouseover", () => {
        cell.classList.add("hover");
      });
    });
  }

//function that prompts user to change # of pixels which changes the # of grids  

defaultGrid();
