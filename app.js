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
  checkForWinner();
}

// write a function to check for the winner
var checkForWinner = function() {
  // // assign the rows to a variable
  // var [row1, row2, row3] = document.getElementsByClassName('row');
  // console.log(row1);
  // row1 = row1.children
  // console.log(row1[0].innerHTML);
  // // iterate over the rows
  // if (row1[0].innerHTML === 'X' && row1[1].innerHTML === 'X' && row1[2].innerHTML === 'X') {
  //   alert('Player One is the Winner!');
  // } else if (row2[0].innerHTML === 'X' && row2[1].innerHTML === 'X' && row2[2].innerHTML === 'X') {
  //   alert('Player One is the Winner!');
  // } else if (row3[0].innerHTML === 'X' && row3[1].innerHTML === 'X' && row3[2].innerHTML === 'X') {
  //   alert('Player One is the Winner!');
  // } else if (row1[0].innerHTML === 'X' && row2[0].innerHTML === 'X' && row3[0].innerHTML === 'X') {
  //   alert('Player One is the Winner!');
  // } else if (row1[1].innerHTML === 'X' && row2[1].innerHTML === 'X' && row3[1].innerHTML === 'X') {
  //   alert('Player One is the Winner!');
  // } else if (row1[2].innerHTML === 'X' && row2[2].innerHTML === 'X' && row3[2].innerHTML === 'X') {
  //   alert('Player One is the Winner!');
  // }

  var rows = document.getElementsByClassName('row');

  for (row of rows) {
    if (row.children[0].innerHTML === row.children[1].innerHTML && row.children[1].innerHTML === row.children[2].innerHTML) {
      if (row.children[0].innerHTML === 'X') {
        alert('Player One wins the game!')
      } else if (row.children[0].innerHTML === 'O') {
        alert('Player Two wins the game!')
      }
    }
  }
}

document.body.addEventListener('click', event => {
  if (event.target.className === 'square') {
    makeMove(event.target);
  }
});
