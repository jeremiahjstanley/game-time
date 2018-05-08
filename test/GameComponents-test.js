const chai = require('chai');
const assert = chai.assert;
const GameComponents = require('../lib/GameComponents.js');

describe('Game Components', function() {
  let gameComponents
  describe('Game Components constructor', function() {

    beforeEach(() => { 
      gameComponents = new GameComponents(0, 0, 1, 'red', 1, 1);
    });

    it('Should have an x and y coordinate', function() {
      const expectedX = 0;
      const expectedY = 0; 

      const actualX = gameComponents.x;
      const actualY = gameComponents.y;
      
      assert.equal(actualX, 0);
      assert.equal(actualY, 0);
    });

    it('Should have a radius', function () {
      const expectedRadius = 1;

      const actualRadius = gameComponents.radius;

      assert.equal(actualRadius, 1);
    });

    it('Should have a color', function () {
      const expectedColor = 'red';

      const actualColor = GameComponents.color;

      assert.equal(actualColor, 'red')
    });

    it('should have a x-velocity', function() {
      const expectedDx = 1;

      const actualDx = gameComponents.dx;

      assert.equal(actualDx, expectedDx)
    });

    it('should have a y-velocity', function() {
      const expectedDy = 1;

      const actualDy = gameComponents.dy;

      assert.equal(actualDy, expectedDy)
    });
  });
});