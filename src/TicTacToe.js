(function(exports) {
  'use strict';

  function TicTacToe (board = new Board()) {
    this.board = board.grid;
    this.X = new Player('X');
    this.O = new Player('O');
    this.winningCombinations = [[1, 2, 3], [4, 5, 6],
                                [7, 8, 9], [1, 5, 9],
                                [3, 5, 7], [1, 4, 7],
                                [2, 5, 8], [3, 6, 9]];
  }

  TicTacToe.prototype.play = function (player, position) {
    if(this.calculatePlayerTurn(player) !== player) { throw Error('Switch players');}
    if(this.board[position] === 0) {
      player.moves.push(position);
      return this.board[position] = player.name;
    }
  };

  TicTacToe.prototype.calculatePlayerTurn = function (player) {
    var opponent;
    player === this.X ? opponent = this.O : opponent = this.X;
    return player.moves.length > opponent.moves.length ? opponent : player;
  };

  exports.TicTacToe = TicTacToe;

})(this);
