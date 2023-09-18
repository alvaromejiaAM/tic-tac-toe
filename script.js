const createPlayers = (name, tile, turn) =>{
  return {name, tile, turn}
  }

const gameBoard = (() =>{
  let container = document.querySelector('.game');
  let array = []

  for(let i = 0; i < 9; i++){
    let box = document.createElement('button');
    box.classList.add(i);
    array[i] = 0;
    container.appendChild(box);
  }

})()

const displayController =(() =>{
  const player1 = createPlayers('player1', 'x', true);
  const player2 = createPlayers('player2', 'o', false);
  
})()