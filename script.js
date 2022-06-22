// Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(20);
    makeColumns(20);
    hoverColor();
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

// Hover effect
// for(i = 0; i < cells.length; i++){
//     cells[i].addEventListener("mouseenter", () => {
//     cells[i].classList.add("hover");
//     })
// }

//function that changes div color uponed being hovered
function hoverColor() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.addEventListener("mouseover", () => {
        cell.classList.add("hover");
      });
    });
  }

defaultGrid();
