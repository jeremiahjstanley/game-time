const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/Game.js');
const Obstacles = require('../lib/Obstacles.js');
const Centipede = require('../lib/Centipede.js');
const Shooter = require('../lib/Shooter.js');

global.canvas = {width: 500, height: 500}

describe('Game', function() { 
let game;
describe('Game constructor', function() {

    beforeEach(() => {
        game = new Game()
    });

  it('Should be able to instantiate obstacles', function() {
    const actualObstacles = game.obstacles.x;
    
    assert.equal(actualObstacles, 0);
  });

  it('Should be able to instantiate a centipede', function() {
    const actualCentipede = game.centipede.x;
    
    assert.equal(actualCentipede, 0);
  });

  it('Should be able to instantiate a shooter', function() {
    const actualShooter = game.shooter.x;
    
    assert.equal(actualShooter, 255);
  });

  it('Should start the player with 5 lives', function() {
    const expectedLives = 3;

    const actualLives = game.lives;
    
    assert.equal(actualLives, 3);
  });

  it('Should start the player with a score of zero', function() {
    const expectedScore = 0;

    const actualScore = game.score;
    
    assert.equal(actualScore, 0);
  });


describe('Game constructor methods', function() {

    beforeEach(() => {
        beforeEach(() => {
        game = new Game()
    });
});

      it('Should have the ability to initialize a game', function() {
        assert.isFunction(game.initialize);
      });

      it('Should manage the prodedure of the game', function() {
        assert.isFunction(game.procedure);
      });

      it('Should have the ability to level up', function() {
        assert.isFunction(game.levelUp);
      });

      it("Should increase centipede's speed when level up is executed", function() {
        game.levelUp()
        assert.equal(game.centipede.segments[0].dx, 11);
      });

      it('Should have the ability to get the distance between two objects', function() {
        assert.isFunction(game.getDistance);
        const distance = game.getDistance(1, 1, 4, 5);
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
        game.initialize()
        gameStep(51, game);
          
        assert.isFunction(game.detectCentipedeWallCollision);
        assert.equal(game.centipede.segments[0].y, 15);
      });

      it('Should have the ability detect collisions between centipede and mushrooms', function() {
        game.initialize()
        game.obstacles.mushrooms[0].x = 15
        game.obstacles.mushrooms[0].y = 5
        gameStep(1, game);

        assert.isFunction(game.detectCentipedeMushroomCollision);
        assert.equal(game.centipede.segments[0].dx, -10);
      });

      it('Should have the ability detect collisions between shooter and mushrooms', function() {
        game.initialize()
        game.obstacles.mushrooms[0].x = 255
        game.obstacles.mushrooms[0].y = 485
        
        game.moveShooter('up');
        gameStep(1, game)

    
        assert.isFunction(game.detectShooterMushroomCollision);
        assert.equal(game.shooter.y, 495);
      });

      it('Should have the ability to move shooter', function() {
        game.initialize();
        game.moveShooter('up');

        assert.isFunction(game.moveShooter);
        assert.equal(game.shooter.y, 485);
      });

      it('Should have the ability to move bullets', function() {
        game.initialize();

        assert.isFunction(game.moveBullets);
      });

      it('Should have the ability to detect collisions between spiders and bullets', function() {
        game.initialize();
        game.obstacles.spiders[0].x = 50;
        game.obstacles.spiders[0].y = 450;
        game.shooter.shoot();
        game.shooter.bullets[0].x = 50;
        game.shooter.bullets[0].y = 460;
        gameStep(1, game);

        assert.isFunction(game.detectBulletSpiderCollision);
        assert.equal(game.shooter.bullets.length, 0);
        assert.equal(game.obstacles.spiders.length, 0);
        assert.equal(game.score, 500);
      });

      it('Should have the ability to detect collisions between centipede and bullets', function() {
        game.initialize();
        game.centipede.segments[0].x = 255;
        game.centipede.segments[0].y = 485;
        game.shooter.shoot();
        game.shooter.bullets[0].x = 265
        game.shooter.bullets[0].y = 485
        gameStep(1, game);

        assert.isFunction(game.detectBulletSpiderCollision);
        assert.equal(game.shooter.bullets.length, 0);
        assert.equal(game.centipede.segments.length, 19);
        assert.equal(game.score, 250);
      });

      it('Should have the ability to detect collisions between spiders, centipede, and bullets', function() {
        assert.isFunction(game.detectBulletCollision);
      });

      it('Should have the ability to detect collisions between the shooter and centipede', function() {
        game.initialize();
        game.centipede.segments[0].x = 245;
        game.centipede.segments[0].y = 495;
        gameStep(1, game);

        assert.isFunction(game.detectCentipedeShooterCollision);
        assert.equal(game.shooter.x, 255);
        assert.equal(game.shooter.y, 495);
        assert.equal(game.lives, 2);
        assert.equal(game.score, -100);
      });

      it('Should have the ability to detect collisions between the shooter and spider', function() {
        game.initialize();
        game.obstacles.spiders[0].x = 245;
        game.obstacles.spiders[0].y = 485;
        gameStep(1, game);

        assert.isFunction(game.detectCentipedeShooterCollision);
        assert.equal(game.shooter.x, 255);
        assert.equal(game.shooter.y, 495);
        assert.equal(game.lives, 2);
        assert.equal(game.score, -250);
      });
    });

});
});