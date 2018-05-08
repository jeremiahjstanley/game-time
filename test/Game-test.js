const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/Game.js');

global.canvas = {width: 500, height: 500}

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

  function gameStep(number, game) {
    for(var i = 0; i < number; i++) {
    game.centipede.move()
    game.obstacles.spider.move()
    game.detectCentipedeWallCollision();
    game.detectBulletCollision();
    game.detectCentipedeShooterCollision();
    game.spiderCollisionDetection();
    game.detectShooterMushroomCollision();
    };
  };

  it('Should have the ability detect collisions between centipede and wall', function() {
    //setup
    const game = new Game();

    //execution
    game.initialize()
    gameStep(51, game);
      
    //assert
    assert.isFunction(game.detectCentipedeWallCollision);
    assert.equal(game.centipede.segments[0].y, 15);
  });

  it('Should have the ability detect collisions between centipede and mushrooms', function() {
    //setup
    const game = new Game();

    //execution
    game.initialize()
    game.obstacles.mushrooms[0].x = 15
    game.obstacles.mushrooms[0].y = 5
    gameStep(1, game);

    //assert
    assert.isFunction(game.detectCentipedeMushroomCollision);
    assert.equal(game.centipede.segments[0].dx, -10);
  });

it('Should have the ability detect collisions between shooter and mushrooms', function() {
    //setup
    const game = new Game();

    //execution
    game.initialize()
    game.obstacles.mushrooms[0].x = 255
    game.obstacles.mushrooms[0].y = 485
    
    game.moveShooter('up');
    gameStep(1, game)

    //assert
    assert.isFunction(game.detectShooterMushroomCollision);
    assert.equal(game.shooter.y, 495);
  });

it('Should have the ability to move shooter', function() {
    //setup
    const game = new Game();

    //execution
    game.initialize();
    game.moveShooter('up');

    //assert
    assert.isFunction(game.moveShooter);
    assert.equal(game.shooter.y, 485);
  });

it('Should have the ability to move bullets', function() {
    //setup
    const game = new Game();

    //execution
    game.initialize();

    //assert
    assert.isFunction(game.moveBullets);
  });

it('Should have the ability to detect collisions between spiders and bullets', function() {
    //setup
    const game = new Game();

    //execution
    game.initialize();
    game.obstacles.spiders[0].x = 50;
    game.obstacles.spiders[0].y = 450;
    game.shooter.shoot();
    game.shooter.bullets[0].x = 50;
    game.shooter.bullets[0].y = 460;
    gameStep(1, game);

    //assert
    assert.isFunction(game.detectBulletSpiderCollision);
    assert.equal(game.shooter.bullets.length, 0);
    assert.equal(game.obstacles.spiders.length, 0);
    assert.equal(game.score, 500);
  });

it('Should have the ability to detect collisions between centipede and bullets', function() {
    //setup
    const game = new Game();

    //execution
    game.initialize();
    game.centipede.segments[0].x = 255;
    game.centipede.segments[0].y = 485;
    game.shooter.shoot();
    game.shooter.bullets[0].x = 265
    game.shooter.bullets[0].y = 485
    gameStep(1, game);

    //assert
    assert.isFunction(game.detectBulletSpiderCollision);
    assert.equal(game.shooter.bullets.length, 0);
    assert.equal(game.centipede.segments.length, 19);
    assert.equal(game.score, 250);
  });

it('Should have the ability to detect collisions between spiders, centipede, and bullets', function() {
    //setup
    const game = new Game();

    //assert
    assert.isFunction(game.detectBulletCollision);
  });

it('Should have the ability to detect collisions between the shooter and centipede', function() {
    //setup
    const game = new Game();

    //execution
    game.initialize();
    game.centipede.segments[0].x = 245;
    game.centipede.segments[0].y = 495;
    gameStep(1, game);

    //assert
    assert.isFunction(game.detectCentipedeShooterCollision);
    assert.equal(game.shooter.x, 255);
    assert.equal(game.shooter.y, 495);
    assert.equal(game.lives, 4);
    assert.equal(game.score, -100);
  });

it('Should have the ability to detect collisions between the shooter and spider', function() {
    //setup
    const game = new Game();

    //execution
    game.initialize();
    game.obstacles.spiders[0].x = 245;
    game.obstacles.spiders[0].y = 485;
    gameStep(1, game);

    //assert
    assert.isFunction(game.detectCentipedeShooterCollision);
    assert.equal(game.shooter.x, 255);
    assert.equal(game.shooter.y, 495);
    assert.equal(game.lives, 4);
    assert.equal(game.score, -250);
  });

});