const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clear");
const resizeBtn = document.querySelector(".resize");
const rainbowBtn = document.querySelector(".rainbow");
const sketchBtn = document.querySelector(".sketch");
const inkBtn = document.querySelector(".ink");

let squares = document.querySelectorAll(".grid-item");
let drawColor = "black";
let size = 16;

clearBtn.addEventListener("click", clear);
resizeBtn.addEventListener("click", resizeGrid);
inkBtn.addEventListener("click", function () {
  squares.forEach((square) => {
    square.addEventListener("mouseover", function () {
      drawColor = "black";
      square.style.backgroundColor = drawColor;
    });
  });
});
rainbowBtn.addEventListener("click", function () {
  squares.forEach((square) => {
    square.addEventListener("mouseover", function () {
      randomColor();
      square.style.backgroundColor = drawColor;
    });
  });
});
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

function createGrid() {
  container.style.setProperty("--grid-size", size);

  for (i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

function draw() {
  squares = document.querySelectorAll(".grid-item");

  squares.forEach((square) => {
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = drawColor;
    });
  });
}

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

function clear() {
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

createGrid();
draw();
