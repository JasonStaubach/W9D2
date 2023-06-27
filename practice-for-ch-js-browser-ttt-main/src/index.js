// Add your import statements for View and Game here
import Game from "./game.js";
import View from  "./ttt-view.js";

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  this.game = new Game()
  this.view = new View(game, document.querySelector(".container"))
});