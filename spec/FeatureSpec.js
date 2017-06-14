describe('Playing TicTacToe',function(){

  var tictactoe;

  beforeEach(function(){
    tictactoe = new TicTacToe();
  });

  it('playerX takes their turn and chooses position 2', function(){
    tictactoe.play(tictactoe.playerX, 2, tictactoe.playerO);
    expect(tictactoe.playerX.moves).toEqual([2]);
    expect(tictactoe.grid[2]).toEqual('X');
  });

  describe('players must take turns', function(){
    it('playerX takes their turn and attempts to take a second turn', function(){
      tictactoe.play(tictactoe.playerX, 2, tictactoe.playerO);
      tictactoe.play(tictactoe.playerX, 3, tictactoe.playerO);
      tictactoe.play(tictactoe.playerO, 5, tictactoe.playerX);
      expect(tictactoe.playerX.moves).toEqual([2]);
      expect(tictactoe.playerO.moves).toEqual([5]);
    });
  });
});
