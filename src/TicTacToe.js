(function(exports) {
  'use strict';

  function TicTacToe () {
    this.availablePositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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

  TicTacToe.prototype.play = function (player, position) {
    if(player.moves.length > this.opponent(player).moves.length) {
      throw Error('It\'s player' + this.opponent(player).name + 's turn');
    }
    if(this.availablePositions.includes(position)) {
      this.availablePositions.splice(position - 1, 1);
      player.moves.push(position);
      return this.grid[position] = player.name;
    }
  };

  TicTacToe.prototype.opponent = function (player) {
    if (player === this.playerX) { return this.playerO; }
    return this.playerX;
  };

  exports.TicTacToe = TicTacToe;

})(this);
