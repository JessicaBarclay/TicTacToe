describe('Player', function(){

  var player;

  beforeEach(function(){
    player = new Player();
  });

  it('has an inplay property set to false by default', function(){
    expect(player.inplay).toEqual(false);
  });
});
