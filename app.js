const container = document.querySelector(".container");
const colors = [
  "brown",
  "teal",
  "DeepPink",
  "OrangeRed",
  "yellowgreen",
  "DarkKhaki",
  "LimeGreen",
  "indigo",
  "purple",
  "blue",
  "yellow",
  "grey",
];

document.addEventListener("DOMContentLoaded", () => {
  createDivs();
  changeBgColorDynamic();
});

function createDivs() {
  for (let i = 0; i < 400; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.append(square);
  }
}

function changeBgColorDynamic() {
  const squares = container.querySelectorAll(".square");
  squares.forEach((square) => {
    const randomIndex = Math.floor(Math.random() * colors.length);

    square.addEventListener("mousemove", () => {
      square.style.cssText = `background-color:${colors[randomIndex]}; filter:blur(1px)`;
    });

    square.addEventListener("mouseleave", () => {
      setTimeout(() => {
        square.style.cssText = `background-color:#37474f; filter:blur(0px)`;
      }, 800);
    });
  });
}
