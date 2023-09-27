const createPlayers = (name, tile, turn, win) =>{
  return {name, tile, turn}
  }

const gameBoard = (() =>{
  let container = document.querySelector('.game');
  let array = [];
  //Create the board and array
  for(let i = 0; i < 9; i++){
    let box = document.createElement('button');
    box.classList.add(i);
    array[i] = 0;
    container.appendChild(box);
  }

  return array;

})();

const displayController = (() =>{

  const player1 = createPlayers('player1', 'x', true, false);
  const player2 = createPlayers('player2', 'o', false, false);
  const board = gameBoard;
  let endGame = false;

  displayInfo();

  let box = document.querySelectorAll('.game > button');
  box.forEach(square => {
    square.addEventListener('click', (e)=>{
      let index = e.target.classList;
      index = +index; //change to number
      let whoTurn = getTurn(board[index]);
      displayInfo();
      if(!(whoTurn === false)){
        let changeBoard = placeTile(whoTurn, index);
        if(changeBoard === true){
          e.target.innerText = whoTurn;
        }
      }
      console.log(board);
    });
  })

  function getTurn(squarePos){
    if(player1.turn === true && squarePos === 0 && endGame === false){
      player1.turn = false;
      player2.turn = true;
      return player1.tile;
    }
    else if(player2.turn === true && squarePos === 0 && endGame === false){
      player1.turn = true;
      player2.turn = false;
      return player2.tile;
    }
  }

  function placeTile(tile, index){
    if(tile === 'x' && board[index] === 0){
      board[index] = 1;
      winner(board);
      return true;
    }
    else if(tile === 'o' && board[index] === 0){
      board[index] = 2;
      winner(board);
      return true;
    }
    else{
      return false; //tile has been placed return false
    }
  }

  function displayInfo(){
    let infoContainer = document.querySelector('.info');
    if(player1.turn === false){
      infoContainer.innerText = "Player 2's Turn";
    }
    else if(player2.turn === false){
      infoContainer.innerText = "Player 1's Turn";
    }
    if(player1.win){
      infoContainer.innerText = 'Player1 Wins!';
    }
    if(player2.win){
      infoContainer.innerText = 'Player2 Wins!';
    }

  }

  function winner(board) {
    const winCombos = [0,1,2];

    console.log(player1.win);
    if(board[0] === 1 && board[1] === 1 && board[2] === 1){
      endGame = true;
      player1.win = true;
      displayInfo();
    }
  }

  
})();
