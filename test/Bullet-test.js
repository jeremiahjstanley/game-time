const chai = require('chai');
const assert = chai.assert;
const Bullet = require('../lib/Bullet.js');

describe ('Bullet', function() {
  it('Should be a constructor', function() {
    //setup
    const bullet = new Bullet();
  });

  it('Should have an x and y coordinate', function () {
    //setup
    const bullet = new Bullet();
    const expectedX = this.x;
    const expectedY = this.y;

    //execution
    const actualX = Bullet.x;
    const actualY = Bullet.y;

    //assert
    assert.equal(actualX, expectedX);
    assert.equal(actualY, expectedY);
  });

  it('Should have a radius', function() {
    //setup
    const bullet = new Bullet();
    const expectedRadius = this.radius;

    //execution
    const actualRadius = Bullet.radius;

    //assert
    assert.equal(actualRadius, expectedRadius)
  })

  it('Should have a color', function() {
    //setup
    const bullet = new Bullet();
    const expectedColor = this.color;

    //execution
    const actualColor = Bullet.color;

    //assert
    assert.equal(actualColor, expectedColor)
  })

  it('Should have an x-velocity and y-velocity', function() {
    //setup
    const bullet = new Bullet();
    const expectedDx = this.dx;
    const expectedDy = this.dy;

    //execution
    const actualDx = Bullet.dx;
    const actualDy = Bullet.dy;

    //assert
    assert.equal(actualDx, expectedDx);
    assert.equal(actualDy, expectedDy);
  })

  it('Should be able to move', function() {
    //setup
    const bullet = new Bullet();
    // const expectedMovement = bullet.move();

    //execution
    bullet.move();

    //assert
    assert.equal(bullet.y, 0)
  })
});