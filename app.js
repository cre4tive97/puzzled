const container = document.querySelector(".container__ul");
const startBtn = document.querySelector(".start-btn");
const gameFinish = document.querySelector(".game-finish");
const playtime = document.querySelector(".container__playtime");

let tileCount = 16;
let tiles = [];

tiles = createImageTiles();

function setGame() {
  tiles = createImageTiles();
  tiles.forEach((tile) => container.appendChild(tile));
  setTimeout(() => {
    shuffleImage(tiles).forEach((tile) => container.appendChild(tile));
  }, 2000);
}

setGame();

function shuffleImage(array) {
  let index = array.length - 1;
  while (index > 0) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    index--;
  }
  return array;
}

function createImageTiles() {
  const tempArray = [];
  Array(tileCount)
    .fill()
    .forEach((a, i) => {
      const li = document.createElement("li");
      li.setAttribute("data-index", i);
      li.classList.add(`list${i}`);
      tempArray.push(li);
    });
  return tempArray;
}
