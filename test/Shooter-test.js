const chai = require('chai');
const assert = chai.assert;
const Shooter = require('../lib/Shooter.js');

describe('Shooter', function() { 
  let shooter;
  describe('should be a constructor', function() {
  
    beforeEach(() => {
      shooter = new Shooter(0, 0, 1, 'red', 1, 1);
    });

    it('should have an x and y coordinate', function() {
      const expectedX = 0;
      const expectedY = 0; 

      const actualX = shooter.x;
      const actualY = shooter.y;
      
      assert.equal(actualX, 0);
      assert.equal(actualY, 0);
    });

    it('should have a radius', function () {
      const expectedRadius = 1;

      const actualRadius = shooter.radius;

      assert.equal(actualRadius, 1);
    });

    it('should have a color', function () {
      const expectedColor = 'red';

      const actualColor = shooter.color;

      assert.equal(actualColor, 'red');
    });

    it('should have a x-velocity', function() {
      const expectedDx = 1;

      const actualDx = shooter.dx;

      assert.equal(actualDx, 1);
    });

    it('should have a y-velocity', function() {
      const expectedDy = 1;

      const actualDy = shooter.dy;

      assert.equal(actualDy, 1);
    });

    it('should have the ability to shoot', function() {
      shooter.shoot();
      shooter.shoot();
      shooter.shoot();

      assert.isFunction(shooter.shoot);
      assert.equal(shooter.bullets.length, 3);
    });
  })
});