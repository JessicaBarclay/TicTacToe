describe('Player', function(){

  var player;

  beforeEach(function(){
    player = new Player();
  });

  it('has a moves array property', function(){
    expect(player.moves).toEqual([]);
  });
});
