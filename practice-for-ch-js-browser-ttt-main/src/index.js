// Add your import statements for View and Game here
import Game from "/Users/user/Desktop/App-academy-May-2023/W9D2/practice-for-ch-js-browser-ttt-main/ttt_node/game.js";
import View from  "./ttt-view.js";


document.addEventListener("DOMContentLoaded", () => {
  window.View = View;
  window.Game = Game;


  // Your code here
  const game = new Game();
  const view = new View(game, document.querySelector(".ttt"))
});