const chai = require('chai');
const assert = chai.assert;
const Shooter = require('../lib/Shooter.js');

describe('Shooter', function() { 
  it('should be a constructor', function() {
    //setup
    const shooter = new Shooter();
  });

  it('should have an x and y coordinate', function() {
    //setup
    const shooter = new Shooter(0, 0);
    const expectedX = this.x;
    const expectedY = this.y; 

    //execution
    const actualX = Shooter.x;
    const actualY = Shooter.y;
    
    //assert
    assert.equal(actualX, expectedX);
    assert.equal(actualY, expectedY);

  });

  it('should have a radius', function () {
    //setup
    const shooter = new Shooter(0, 0, 1);
    const expectedRadius = this.radius;

    //execution
    const actualRadius = Shooter.radius;

    //assert
    assert.equal(actualRadius, expectedRadius);

  });


  it('should have a color', function () {
    //setup
    const shooter = new Shooter(0, 0, 1, 'red');
    const expectedColor = this.color;

    //execution
    const actualColor = Shooter.color;

    //assert
    assert.equal(actualColor, expectedColor)

  });

  it('should have a x-velocity', function() {
    //setup
    const shooter = new Shooter(0, 0, 1, 'red', 1, 1);
    const expectedDx = this.dx;

    //execution
    const actualDx = Shooter.dx;

    //assert
    assert.equal(actualDx, expectedDx)

  });

  it('should have a y-velocity', function() {
    //setup
    const shooter = new Shooter(0, 0, 1, 'red', 1, 1);
    const expectedDy = this.dy;

    //execution
    const actualDy = Shooter.dy;

    //assert
    assert.equal(actualDy, expectedDy)

  });

    it('should have the ability to shoot', function() {
    //setup
    const shooter = new Shooter(0, 0, 1, 'red', 1, 1);

    //execution
    shooter.shoot();
    shooter.shoot();
    shooter.shoot();

    //assert
    assert.equal(shooter.bullets.length, 3);
  });

});