const container = document.querySelector(".container__ul");
const startBtn = document.querySelector(".start-btn");
const gameFinish = document.querySelector(".game-finish");
const playtime = document.querySelector(".container__playtime");

let tileCount = 16;

Array(tileCount)
  .fill()
  .forEach((a, i) => {
    const li = document.createElement("li");
    li.setAttribute("data-index", i);
    li.classList.add(`list${i}`);
    container.appendChild(li);
  });
