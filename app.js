const gridContainer = document.getElementById("gridContainer");

let gridSize;

createGrid();

function createGrid(){
    gridSize = Math.pow(prompt("Enter number between 4 and 64 for desired grid size"), 2);
    for(let i = 0; i < gridSize; i++){
        const cell = document.createElement("div")
        cell.classList.add("cell");
            cell.addEventListener("mouseenter", function(){
            cell.classList.add("cellNew");
            });
        gridContainer.appendChild(cell);
        gridContainer.style.gridTemplateColumns = `repeat(${Math.sqrt(gridSize)}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${Math.sqrt(gridSize)}, 1fr)`;
    }
}


let createBtn = document.querySelector(".create");
createBtn.addEventListener("click", function (){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid();
});


let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", function (){
    clearGrid();
});


function clearGrid(){
    for (let i = 0; i < gridSize; i++){
        const cells = document.querySelectorAll(".cell")
        cells[i].classList.remove("cellNew");
    }
}

