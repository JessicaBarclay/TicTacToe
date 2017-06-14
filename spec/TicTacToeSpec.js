describe('TicTacToe', function(){

  var tictactoe;

  beforeEach(function(){
    tictactoe = new TicTacToe();
  });

  it('has a grid with positions 1-9', function(){
    expect(tictactoe.grid).toEqual({1 : 0, 2 : 0, 3 : 0,
                                    4 : 0, 5 : 0, 6 : 0,
                                    7 : 0, 8 : 0, 9 : 0});
  });

  it('has a property of winning combinations', function(){
    expect(tictactoe.winningCombinations).toEqual([[1, 2, 3], [4, 5, 6],
                                                   [7, 8, 9], [1, 5, 9],
                                                   [3, 5, 7], [1, 4, 7],
                                                   [2, 5, 8], [3, 6, 9]]);
  });

  it('is initialized with two players', function(){
    expect(tictactoe.playerX).toBeDefined();
    expect(tictactoe.playerO).toBeDefined();
  });
});
