
const createPlayers = (name, tile, turn) =>{
  return {name, tile, turn}
  }

const gameBoard = (() =>{
  let container = document.querySelector('.game');
  let array = []

  //Create the board and array
  for(let i = 0; i < 9; i++){
    let box = document.createElement('button');
    box.classList.add(i);
    array[i] = 0;
    container.appendChild(box);
  }

  return{array};

})();

const displayController = (() =>{

  const player1 = createPlayers('player1', 'x', true);
  const player2 = createPlayers('player2', 'o', false);
  
  const board = gameBoard;
  let box = document.querySelectorAll('.game > button');
  box.forEach(square => {
    square.addEventListener('click', (e)=>{
      let index = e.target.classList;
      parseInt(index);
      whoTurn = getTurn(player1, player2);
      board[index] = whoTurn;
      e.target.innerText = whoTurn;
    });
  })

  function getTurn(player1, player2){
    if(player1.turn === true){
      player1.turn = false;
      player2.turn = true;
      return player1.tile;
    }
    else{
      player1.turn = true;
      player2.turn = false;
      return player2.tile;
    }
  }

})();