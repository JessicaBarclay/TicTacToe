(function(exports) {
  'use strict';

  function TicTacToe () {
    this.grid = [{1 : []}, {2 : []}, {3 : []},
                 {4 : []}, {5 : []}, {6 : []},
                 {7 : []}, {8 : []}, {9 : []}];
    this.winningCombinations = [[1, 2, 3], [4, 5, 6],
                                [7, 8, 9], [1, 5, 9],
                                [3, 5, 7], [1, 4, 7],
                                [2, 5, 8], [3, 6, 9]];
    this.playerX = new Player();
    this.playerO = new Player();
  }

  exports.TicTacToe = TicTacToe;

})(this);
