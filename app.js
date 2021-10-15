const container = document.querySelector(".container__ul");
const startBtn = document.querySelector(".start-btn");
const gameFinish = document.querySelector(".game-finish");
const playtime = document.querySelector(".container__playtime");

let tileCount = 16;
let tiles = [];

tiles = createImageTiles();

setGame();

// functions

function setGame() {
  container.innerHTML = "";
  tiles = createImageTiles();
  tiles.forEach((tile) => container.appendChild(tile));
  setTimeout(() => {
    container.innerHTML = "";
    shuffleImage(tiles).forEach((tile) => container.appendChild(tile));
  }, 2000);
}

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
      li.setAttribute("draggable", "true");
      li.classList.add(`list${i}`);
      tempArray.push(li);
    });
  return tempArray;
}

//event

container.addEventListener("dragstart", (e) => {
  console.log(e);
});

container.addEventListener("dragover", (e) => {
  console.log(e);
});
container.addEventListener("drop", (e) => {
  console.log(e);
});
