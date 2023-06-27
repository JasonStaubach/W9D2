class View {
  constructor(game, el) {
    this.game = game;
    // this.grid = Board.makeGrid();
    this.el = el;
    this.setupBoard();
    this.handleClick();
  }
  
  setupBoard() {
    let grid = document.createElement('ul')
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        // console.log("hey")
        let li = document.createElement('li');
        li.classList.add("unclicked");
        li.dataset.pos =[i,j];
        grid.appendChild(li);
      }
    }

    this.el.appendChild(grid);
    
  }
  
  handleClick(e) {
    this.el.addEventListener("click", (e)=>{
      // console.log(e.target.dataset.pos[0],e.target.dataset.pos[2]);
      this.game.playMove([e.target.dataset.pos[0],e.target.dataset.pos[2]]);
      e.target.classList.remove("unclicked");
      e.target.classList.add("clicked");
      e.target.innerText = this.game.currentPlayer;
      this.handleGameOver(e.target.dataset.pos[0],e.target.dataset.pos[2]);
    })
  }

  // makeMove(square) {

  // }
  
  handleGameOver(i,j) {
    // check row 
    let row = true;
    let column = true;
    // let diagonal = true;

    const a = document.querySelectorAll("li"); 
    const v = a[(i*3+j)];
    for( let k = 0; k<3 ; k++){
      if( a[i*3+k] !== v) row = false;
      
      if( a[k*3+j] !== v) column = false;
    }

    if(row || column) console.log("winner")
  }
}

export default View;