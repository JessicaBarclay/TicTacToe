describe('Playing TicTacToe',function(){

  var tictactoe;

  beforeEach(function(){
    tictactoe = new TicTacToe();
  });

  it('X chooses position 2', function(){
    tictactoe.play(tictactoe.X, 2);
    expect(tictactoe.X.moves).toEqual([2]);
  });

  it('players cannot choose a position that is not 1-9', function(){
    expect(tictactoe.play(tictactoe.O, 11)).toBeUndefined();
  });

  describe('players must take turns', function(){
    it('X takes their turn and attempts to take a second turn', function(){
      tictactoe.play(tictactoe.X, 2);
      expect(function(){ tictactoe.play(tictactoe.X, 3); }).toThrowError('Expecting O');
    });

    it('players can only play a position once per game', function(){
      tictactoe.play(tictactoe.X, 2);
      tictactoe.play(tictactoe.O, 2);
      expect(tictactoe.grid).toEqual({1: 0, 2: 'X', 3: 0,
                                      4: 0, 5: 0, 6: 0,
                                      7: 0, 8: 0, 9: 0});
      expect(tictactoe.O.moves).toEqual([]);
    });

    it('players cannot play the same position as one another', function(){
      tictactoe.play(tictactoe.O, 9);
      tictactoe.play(tictactoe.X, 9);
      expect(tictactoe.grid).toEqual({1 : 0, 2 : 0, 3 : 0,
                                      4 : 0, 5 : 0, 6 : 0,
                                      7 : 0, 8 : 0, 9 : 'O'});
    });
  });
});
