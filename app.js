const container = document.querySelector(".container__ul");
const startBtn = document.querySelector(".start-btn");
const gameFinish = document.querySelector(".game-finish");
const playtime = document.querySelector(".container__playtime");

let tileCount = 16;
let tiles = [];
let dragged = {
  el: "",
  class: "",
  index: 0,
};

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
  const obj = e.target;
  dragged.el = obj;
  dragged.class = e.target.className;
  dragged.index = [...e.target.parentNode.children].indexOf(e.target);
  console.log(dragged.el);
  console.log(dragged.class);
  console.log(dragged.index);
});

container.addEventListener("dragover", (e) => {
  e.preventDefault();
});
container.addEventListener("drop", (e) => {
  const obj = e.target;

  if (obj.className !== dragged.class) {
    let originPlace;
    let isLast = false;

    if (dragged.el.nextSibling) {
      originPlace = dragged.el.nextSibling;
    } else {
      originPlace = dragged.el.previousSibling;
      isLast = true;
    }
    const droppedIndex = [...obj.parentNode.children].indexOf(e.target);
    dragged.index > droppedIndex
      ? obj.before(dragged.el)
      : obj.after(dragged.el);
    isLast ? originPlace.after(obj) : originPlace.before(obj);
  }
});
