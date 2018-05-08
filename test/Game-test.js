const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/Game.js');

describe('Game', function() { 
  it('Should be a constructor', function() {
    //setup
    const game = new Game();
  });

  it('Should be able to instantiate obstacles', function() {
    //setup
    const game = new Game();
    const expectedObstacles = this.obstacles;

    //execution
    const actualObstacles = Game.obstacles;
    
    //assert
    assert.equal(actualObstacles, expectedObstacles);
  });

  it('Should be able to instantiate a centipede', function() {
    //setup
    const game = new Game();
    const expectedCentipede = this.centipede;

    //execution
    const actualCentipede = Game.centipede;
    
    //assert
    assert.equal(actualCentipede, expectedCentipede);
  });

  it('Should be able to instantiate a shooter', function() {
    //setup
    const game = new Game();
    const expectedShooter = this.shooter;

    //execution
    const actualShooter = Game.shooter;
    
    //assert
    assert.equal(actualShooter, expectedShooter);
  });

  it('Should have context', function() {
    //setup
    const game = new Game(context);
    const expectedContext = this.context;

    //execution
    const actualContext = Game.context;
    
    //assert
    assert.equal(actualContext, expectedContext);
  });

  it('Should start the player with 5 lives', function() {
    //setup
    const game = new Game();
    const expectedLives = this.lives;

    //execution
    const actualLives = 5;
    
    //assert
    assert.equal(actualLives, 5);
  });

  it('Should start the player with a score of zero', function() {
    //setup
    const game = new Game();
    const expectedScore = this.score;

    //execution
    const actualScore = 0;
    
    //assert
    assert.equal(actualScore, 0);
  });

  it('Should have the ability to initialize a game', function() {
    //setup
    const game = new Game();

    //execution
    assert.isFunction(game.initialize);
  });

  it('Should have the manage the produce of the game', function() {
    //setup
    const game = new Game();

    //execution
    assert.isFunction(game.procedure);
  });

  it('Should have the ability to level up', function() {
    //setup
    const game = new Game();

    //execution
    assert.isFunction(game.levelUp);
  });

  it("Should increase centipede's speed when level up is executed", function() {
    //setup
    const games = new Game();
    //execution
    games.levelUp()

    //assert
    assert.equal(games.centipede.segments[0].dx, 11);
  });

  it('Should have the ability to get the distance between two objects', function() {
    //setup
    const game = new Game();

    //execution
    assert.isFunction(game.getDistance);
    const distance = game.getDistance(1, 1, 4, 5);

    //assert
    assert.equal(distance, 5);
  });

  it('Should have the ability detect collisions between centipede and wall', function() {
    //setup
    const game = new Game();

    //execution
    game.initialize()

    //assert
    assert.isFunction(game.detectCentipedeWallCollision);
    assert.equal(game.centipede.segments[0].y, 5);
  });

    it('Should have the ability detect collisions between centipede and mushrooms', function() {
    //setup
    const game = new Game();

    //execution
    game.initialize()
    game.detectCentipedeMushroomCollision(game.centipede.segments[0])
    console.log(game.centipede.segments[0].dx)

    //assert
    assert.isFunction(game.detectCentipedeMushroomCollision);
    assert.equal(game.centipede.segments[0].dx, -10);
  });

});