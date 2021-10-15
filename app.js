const container = document.querySelector(".container__ul");
const startBtn = document.querySelector(".start-btn");
const gameFinish = document.querySelector(".game-finish");
const playtime = document.querySelector(".container__playtime");

let tileCount = 16;
let tiles = [];

tiles = createImageTiles();

shuffleImage(tiles.forEach((tile) => container.appendChild(tile)));

function shuffleImage(arr) {
  let index = arr.length - 1;
  while (index > 0) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
    index--;
  }
  return arr;
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
