describe('Playing TicTacToe',function(){

  var tictactoe;

  beforeEach(function(){
    tictactoe = new TicTacToe();
  });

  it('playerX takes their turn and chooses position 2', function(){
    tictactoe.play(this.playerX, 2);
    expect(tictactoe.playerX.moves).toEqual([2]);
    expect(tictactoe.grid[2]).toEqual('X');
  });
});
