var ticTacToe = function() {
  this.turn = 'X';
  this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  this.printBoard = function(board) {
    console.log(`******************* \n|  ${board[0][0]}  |  ${board[0][1]}  |  ${board[0][2]}  |\n*******************\n|  ${board[1][0]}  |  ${board[1][1]}  |  ${board[1][2]}  |\n*******************\n|  ${board[2][0]}  |  ${board[2][1]}  |  ${board[2][2]}  |\n*******************`);
  };
  this.findWinner = function (board, piece, row, col) {
    var winner = false;
    if (board[row][0] === piece && board[row][1] === piece && board[row][2] === piece) { winner = true; }
    if (board[0][col] === piece && board[1][col] === piece && board[2][col] === piece) { winner = true; }
    if (row === col && board[1][1] === piece && (board[1][1] === piece && board[2][2] === piece) || (board[0][2] === piece && board[2][0] === piece)) { winner = true; }
    if (winner) { console.log(piece + ' wins'); }
  };
  this.move = function (x, y) {
    if (this.board[x][y] === ' ') {
      this.board[x][y] = this.turn;
      this.printBoard(this.board);
      this.findWinner(this.board, this.turn, x, y);
      this.turn = this.turn === 'X' ? 'O' : 'X';
    } else {
      console.log('invalid move try again');
    }
  };
};   