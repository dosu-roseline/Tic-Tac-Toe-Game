import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

document.querySelector('.restart').addEventListener('click', onRestartClick);

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", function () {
    onTileClicked(tile.dataset.index);
  });
});

function onTileClicked(i) {
  // Do someting
   // Make move
  game.makeMove(i);
  // Update board
  gameView.updateBoard(game);
  // Change turn
}


function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);