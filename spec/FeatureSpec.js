describe('Playing TicTacToe',function(){

  var tictactoe;

  beforeEach(function(){
    tictactoe = new TicTacToe();
  });

  it('playerX chooses position 2', function(){
    tictactoe.play(tictactoe.playerX, 2);
    expect(tictactoe.playerX.moves).toEqual([2]);
  });

  it('players cannot choose a position that is not 1-9', function(){
    expect(tictactoe.play(tictactoe.playerO, 11)).toBeUndefined();
  });

  describe('players must take turns', function(){
    it('playerX takes their turn and attempts to take a second turn', function(){
      tictactoe.play(tictactoe.playerX, 2);
      expect(function(){ tictactoe.play(tictactoe.playerX, 3); }).toThrowError('It\'s playerOs turn');
    });

    it('players can only play a position once per game', function(){
      tictactoe.play(tictactoe.playerX, 2);
      tictactoe.play(tictactoe.playerO, 2);
      expect(tictactoe.availablePositions).toEqual([1, 3, 4, 5, 6, 7, 8, 9]);
      expect(tictactoe.playerO.moves).toEqual([]);
    });

    it('players cannot play the same position as one another', function(){
      tictactoe.play(tictactoe.playerO, 9);
      tictactoe.play(tictactoe.playerX, 9);
      expect(tictactoe.grid).toEqual({1 : 0, 2 : 0, 3 : 0,
                                      4 : 0, 5 : 0, 6 : 0,
                                      7 : 0, 8 : 0, 9 : 'O'});
    });
  });
});
