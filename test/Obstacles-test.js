const chai = require('chai');
const assert = chai.assert;
const Obstacles = require('../lib/Obstacles.js');

global.canvas = {width: 500, height: 500}


describe('Obstacles', function() { 
  let obstacles;
  describe('Obstacles constructor', function() {

    beforeEach(() => {
      obstacles = new Obstacles(0, 0, 1, 'red', 1, 1)
    });
 

    it('should have an x and y coordinate', function() {
      const expectedX = 0;
      const expectedY = 0; 

      const actualX = obstacles.x;
      const actualY = obstacles.y;

      assert.equal(actualX, 0);
      assert.equal(actualY, 0);
    });

    it('should have a radius', function () {
      const expectedRadius = 1;

      const actualRadius = obstacles.radius;

      assert.equal(actualRadius, 1);
    });

    it('should have a color', function () {
      const expectedColor = 'red';

      const actualColor = obstacles.color;

      assert.equal(actualColor, 'red')
    });

    it('should have an x-velocity', function() {
      const expectedDx = 1;

      const actualDx = obstacles.dx;

      assert.equal(actualDx, 1)
    });

    it('should have an y-velocity', function() {
      const expectedDy = 1;

      const actualDy = obstacles.dy;

      assert.equal(actualDy, 1);
    });
  });

  describe('Obstacle constructor methods', function() {
    beforeEach(() => {
      obstacles = new Obstacles (0, 0, 1, 'red', 100, 1);
    })

    it('should create an array of mushrooms', function() {
      obstacles.createMushroomsArray();

      assert.isFunction(obstacles.createMushroomsArray)
      assert.equal(obstacles.mushrooms.length, 50);
    });

    it('should be able add a new mushroom to the array', function() {
      obstacles.addNewMushroomToArray(obstacles.x, obstacles.y);


      assert.equal(obstacles.mushrooms.length, 1);
    });

    it('should be able to instantiate a spider', function() {
      obstacles.hatchSpider();

    
      assert.isFunction(obstacles.hatchSpider)
      assert.equal(obstacles.spiders.length, 1);
      assert.equal(obstacles.spiders[0].dx, 100);
    });

    it('should be able to instantiate the spider in random position', function() {
      obstacles.hatchSpider();

      assert.equal(obstacles.spiderStartingPositions.length, 30);
    });

    it('should be able to reinstantiate a spider when spiders array is 0', function() {
      obstacles.rehatchSpider();

      assert.isFunction(obstacles.rehatchSpider)
      assert.equal(obstacles.spiders.length, 1);
    });

    it('should not instantiate a new spider when spiders array is greater than 0', function() {
      obstacles.hatchSpider();
      obstacles.rehatchSpider();

      assert.equal(obstacles.spiders.length, 1);
    });
  });

});