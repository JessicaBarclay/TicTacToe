describe('Player', function(){

  var player;

  beforeEach(function(){
    player = new Player('name');
  });

  it('has a moves array property', function(){
    expect(player.moves).toEqual([]);
  });

  it('has a name property', function(){
    expect(player.name).toEqual('name');
  });
});
