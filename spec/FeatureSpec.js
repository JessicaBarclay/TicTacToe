describe('Playing TicTacToe',function(){

  var tictactoe;

  beforeEach(function(){
    tictactoe = new TicTacToe();
  });

  it('playerX takes their turn and chooses position 2', function(){
    tictactoe.play(tictactoe.playerX, 2);
    expect(tictactoe.playerX.moves).toEqual([2]);
    expect(tictactoe.grid[2]).toEqual('X');
  });

  describe('players must take turns', function(){
    it('playerX takes their turn and attempts to take a second turn', function(){
      tictactoe.play(tictactoe.playerX, 2);
      tictactoe.play(tictactoe.playerX, 3);
      tictactoe.play(tictactoe.playerO, 5);
      expect(tictactoe.playerX.moves).toEqual([2]);
      expect(tictactoe.playerO.moves).toEqual([5]);
    });

    it('players can only play a position once per game', function(){
      tictactoe.play(tictactoe.playerX, 2);
      tictactoe.play(tictactoe.playerO, 2);
      expect(tictactoe.availablePositions).toEqual([1, 3, 4, 5, 6, 7, 8, 9]);
      expect(tictactoe.playerO.moves).toEqual([]);
    });
  });
});
