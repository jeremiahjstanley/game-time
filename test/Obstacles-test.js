const chai = require('chai');
const assert = chai.assert;
const Obstacles = require('../lib/Obstacles.js');

global.canvas = {width: 500, height: 500}

describe('Obstacles', function() { 
  it('should be a constructor', function() {
    //setup
    const obstacles = new Obstacles();
  });

  it('should have an x and y coordinate', function() {
    //setup
    const obstacles = new Obstacles(0, 0);
    const expectedX = this.x;
    const expectedY = this.y; 

    //execution
    const actualX = Obstacles.x;
    const actualY = Obstacles.y;
    
    //assert
    assert.equal(actualX, expectedX);
    assert.equal(actualY, expectedY);
  });

  it('should have a radius', function () {
    //setup
    const obstacles = new Obstacles(0, 0, 1);
    const expectedRadius = this.radius;

    //execution
    const actualRadius = Obstacles.radius;

    //assert
    assert.equal(actualRadius, expectedRadius);
  });

  it('should have a color', function () {
    //setup
    const obstacles = new Obstacles(0, 0, 1, 'red');
    const expectedColor = this.color;

    //execution
    const actualColor = Obstacles.color;

    //assert
    assert.equal(actualColor, expectedColor)
  });

  it('should have an x-velocity', function() {
    //setup
    const obstacles = new Obstacles(0, 0, 1, 'red', 1, 1);
    const expectedDx = this.dx;

    //execution
    const actualDx = Obstacles.dx;

    //assert
    assert.equal(actualDx, expectedDx)
  });

  it('should have an y-velocity', function() {
    //setup
    const obstacles = new Obstacles(0, 0, 1, 'red', 1, 1);
    const expectedDy = this.dy;

    //execution
    const actualDy = Obstacles.dy;

    //assert
    assert.equal(actualDy, expectedDy);
  });

  it('should create an array of mushrooms', function() {
    //setup
    const obstacles = new Obstacles(0, 0, 1, 'red', 1, 1);
    
    //execute
    obstacles.createMushroomsArray();

    //assert
    assert.isFunction(obstacles.createMushroomsArray)
    assert.equal(obstacles.mushrooms.length, 50);
  });

  it('should be able add a new mushroom to the array', function() {
    //setup
    const obstacles = new Obstacles(0, 0, 1, 'red', 1, 1);

    //execute
    obstacles.addNewMushroomToArray(obstacles.x, obstacles.y);

    //assert
    assert.equal(obstacles.mushrooms.length, 1);
  });

  it('should be able to instantiate a spider', function() {
    //setup
    const obstacles = new Obstacles(0, 0, 1, 'red', 100, 1);

    //execute
    obstacles.hatchSpider();

    //assert
    assert.isFunction(obstacles.hatchSpider)
    assert.equal(obstacles.spiders.length, 1);
    assert.equal(obstacles.spiders[0].dx, 100);
  });

  it('should be able to instantiate the spider in random position', function() {
    //setup 
    const obstacles = new Obstacles(0, 0, 1, 'red', 1, 1);

    //execute
    obstacles.hatchSpider();

    //assert
    assert.equal(obstacles.spiderStartingPositions.length, 30);
  });

  it('should be able to reinstantiate a spider when spiders array is 0', function() {
    //setup
    const obstacles = new Obstacles(0, 0, 1, 'red', 1, 1);

    //execute
    obstacles.rehatchSpider();

    //assert
    assert.isFunction(obstacles.rehatchSpider)
    assert.equal(obstacles.spiders.length, 1);
  });

  it('should not instantiate a new spider when spiders array is greater than 0', function() {
    //setup
    const obstacles = new Obstacles (0, 0, 1, 'red', 1, 1);

    //execute
    obstacles.hatchSpider();
    obstacles.rehatchSpider();

    //assert
    assert.equal(obstacles.spiders.length, 1);
  });

});