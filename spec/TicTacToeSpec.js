describe('TicTacToe', function(){

  var tictactoe;

  beforeEach(function(){
    tictactoe = new TicTacToe();
  });

  it('has a property of winning combinations', function(){
    expect(tictactoe.winningCombinations).toEqual([[1, 2, 3], [4, 5, 6],
                                                   [7, 8, 9], [1, 5, 9],
                                                   [3, 5, 7], [1, 4, 7],
                                                   [2, 5, 8], [3, 6, 9]]);
  });

  it('has a function to return opponent Player', function(){
    expect(tictactoe.opponent(tictactoe.O)).toEqual(tictactoe.X);
  });
});
