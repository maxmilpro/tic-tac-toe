var currentMove = 'X';

// write a function to make a move for players
var makeMove = function(element) {
  if (element.innerHTML === 'O' || element.innerHTML === 'X') {
    return;
  }

  element.innerHTML = currentMove;
  if (currentMove === 'X') {
    currentMove = 'O';
  } else {
    currentMove = 'X';
  }
  checkWinner();
}

// write a function to check for the winner
var checkWinner = function() {

}

document.body.addEventListener('click', event => {
  if (event.target.className === 'square') {
    makeMove(event.target);
  }
});
