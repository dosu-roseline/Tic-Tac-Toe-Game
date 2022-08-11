export default class GameView {
  constructor() {}

  updateBoard(game) {
    this.updateTurn(game);
    const winningCombination = game.findWinningCombinations();

    for (let i = 0; i < game.board.length; i++) {
      // console.log(game.board[i]);
      const tile = document.querySelector(`.board-tile[data-index="${i}"]`);
      tile.textContent = game.board[i];

      tile.classList.remove("tile-winner");

      let tileType = game.board[i] == "X" ? "tile-x" : "tile-o";
      
      tile.innerHTML = `<span class="${tileType}">${
        game.board[i] ? game.board[i] : ""
      }</span>`;

      if (winningCombination && winningCombination.includes(i)) {
        tile.classList.add("tile-winner");
      }
    }
  }

  updateTurn(game) {
    let playerX = document.querySelector(".player-X");
    let player0 = document.querySelector(".player-0");

    playerX.classList.remove("active");
    player0.classList.remove("active");

    if (game.turn == "X") {
      playerX.classList.add("active");
    } else {
      player0.classList.add("active");
    }
  }
}
