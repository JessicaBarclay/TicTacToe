(function(exports) {
  'use strict';

  function TicTacToe () {
    this.grid = { 1 : 0, 2 : 0, 3 : 0,
                  4 : 0, 5 : 0, 6 : 0,
                  7 : 0, 8 : 0, 9 : 0 };
    this.winningCombinations = [[1, 2, 3], [4, 5, 6],
                                [7, 8, 9], [1, 5, 9],
                                [3, 5, 7], [1, 4, 7],
                                [2, 5, 8], [3, 6, 9]];
    this.playerX = new Player('X');
    this.playerO = new Player('O');
  }

  TicTacToe.prototype.play = function (player, position, opponent) {
    if(player.moves.length > opponent.moves.length) { return; }
    player.moves.push(position);
    this.grid[position] = player.name;
  };

  exports.TicTacToe = TicTacToe;

})(this);
