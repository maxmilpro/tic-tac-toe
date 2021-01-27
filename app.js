var App = function() {
  return console.log('hello world');
}

App();

var currentMove = 'X';

var makeMove = function(square) {
  if (currentMove === 'X') {
    // change the current square to X
    // update currentMove to O
  } else {
    // change the current square to O
    // update currentMove to X
  }

  checkWinner();
}

var checkWinner = function() {

}

document.getElementsByClassName('square').onclick = () => {
  alert('hello world');
}