const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clear");
const resizeBtn = document.querySelector(".resize");
const rainbowBtn = document.querySelector(".rainbow");
const sketchBtn = document.querySelector(".sketch");
const inkBtn = document.querySelector(".ink");
const gridBtn = document.querySelector(".grid");

let squares = document.querySelectorAll(".grid-item");
let drawColor = "black";
let size = 16;

// EVENT LISTENERS

clearBtn.addEventListener("click", clear);
resizeBtn.addEventListener("click", resizeGrid);
gridBtn.addEventListener("click", function () {
  // squares.forEach((square) => {
  //   square.classList.toggle(".grid-item");
  // });
  squares.forEach((square) => {
    square.classList.toggle("grid-lines");
  });
});

//change the color to black, apply it to each square on mouse over
inkBtn.addEventListener("click", function () {
  squares.forEach((square) => {
    square.addEventListener("mouseover", function () {
      drawColor = "black";
      square.style.backgroundColor = drawColor;
    });
  });
});

//change to random color
rainbowBtn.addEventListener("click", function () {
  squares.forEach((square) => {
    square.addEventListener("mouseover", function () {
      randomColor();
      square.style.backgroundColor = drawColor;
    });
  });
});

//need to update this, not working properly
sketchBtn.addEventListener("click", function () {
  drawColor = "black";
  let opacity = 0;
  squares.forEach((square) => {
    square.addEventListener("mouseover", function () {
      square.style.opacity = opacity;
      opacity += 0.1;
    });
  });
});

// FUNCTIONS

function createGrid() {
  container.style.setProperty("--grid-size", size);

  //create the grid of divs based on the inputed grid size
  for (i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

function draw() {
  squares = document.querySelectorAll(".grid-item");

  //draw using the color based on the event listeners
  squares.forEach((square) => {
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = drawColor;
    });
  });
}

//prompts for a number so long as it isnt empty or not a number
//resets the grid, then creates new one
function resizeGrid() {
  do {
    size = prompt("Enter a number from 1-125");
    if (size === null || isNaN(size)) {
      return;
    }
  } while (size > 125);
  container.innerHTML = "";
  createGrid(size);
  draw();
}

function randomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  drawColor = "rgb(" + x + "," + y + "," + z + ")";
}

//clears the grid by setting all the backgrounds of divs to white
function clear() {
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

createGrid();
draw();
