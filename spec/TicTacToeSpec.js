describe('TicTacToe', function(){

  var tictactoe;

  beforeEach(function(){
    tictactoe = new TicTacToe();
  });

  it('has a grid with positions 1-9', function(){
    expect(tictactoe.grid).toEqual([{1 : []}, {2 : []}, {3 : []},
                                    {4 : []}, {5 : []}, {6 : []},
                                    {7 : []}, {8 : []}, {9 : []}]);
  });
});
