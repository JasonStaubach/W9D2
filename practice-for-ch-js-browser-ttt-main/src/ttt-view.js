class View {
  constructor(game, el) {
    this.game = new Game();
    // this.grid = Board.makeGrid();
  }
  
  setupBoard() {
    let grid = document.createElement('ul')
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        let li = document.createElement('li');
        li.dataset.pos = [i,j];
        grid.appendChild(li);
      }
    }
  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;