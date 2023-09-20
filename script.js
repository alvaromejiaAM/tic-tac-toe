const createPlayers = (name, tile, turn) =>{
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

  const player1 = createPlayers('player1', 'x', true);
  const player2 = createPlayers('player2', 'o', false);
  
  const board = gameBoard;
  displayInfo();

  let box = document.querySelectorAll('.game > button');
  box.forEach(square => {
    square.addEventListener('click', (e)=>{
      let index = e.target.classList;
      index = +index; //change to number

      let whoTurn = getTurn();
      displayInfo();
      let changeBoard = placeTile(whoTurn, index);
      if(changeBoard === true){
        e.target.innerText = whoTurn;
      }

    });
  })

  function getTurn(){
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

  function placeTile(tile, index){
    if(tile === 'x' && board[index] === 0){
      board[index] = 1;
      return true;
    }
    else if(tile === 'o' && board[index] === 0){
      board[index] = 2;
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
  }

})();
