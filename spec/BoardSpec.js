describe('Board', function(){

  var board;

  beforeEach(function(){
    board = new Board();
  });

  it('has a 3x3 grid property', function(){
    expect(board.grid).toEqual({1: 0, 2: 0, 3: 0,
                                4: 0, 5: 0, 6: 0,
                                7: 0, 8: 0, 9: 0});
  });

});
