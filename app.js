let cell = document.querySelectorAll(".cell");
for (let i = 0; i<256; i++){
    cell[i].addEventListener("mouseenter", function () {
            cell[i].classList.add("cellNew");
    })
}

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", function (){
    clearGrid();
});

function clearGrid(){
    for (let i = 0; i<256; i++){
        cell[i].classList.remove("cellNew");
    }
}

