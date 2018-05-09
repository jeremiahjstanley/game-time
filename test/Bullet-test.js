const chai = require('chai');
const assert = chai.assert;
const Bullet = require('../lib/Bullet.js');


describe('Bullet', function() {
  let bullet;
  describe ('Bullet constructor', function() {

    beforeEach(() => {
      bullet = new Bullet(0, 0, 1, 'red', 1, 1);
      // let args = { x: 0, y: 0, radius: 1, color: 'red', dx: 1, dy: 1};
      // let {x, y, radius, color, dx, dy} = args;
    }); 

    it('Should have an x and y coordinate', function () {
      const expectedX = 0;
      const expectedY = 0;

      const actualX = bullet.x;
      const actualY = bullet.y;

      assert.equal(actualX, 0);
      assert.equal(actualY, 0);
    });

    it('Should have a radius', function() {
      const expectedRadius = this.radius;

      const actualRadius = 1;

      assert.equal(actualRadius, 1);
    });

    it('Should have a color', function() {
      const expectedColor = 'red';

      const actualColor = bullet.color;

      assert.equal(actualColor, 'red');
    });

    it('Should have an x-velocity and y-velocity', function() {
      const expectedDx = 1;
      const expectedDy = 1;

      const actualDx = bullet.dx;
      const actualDy = bullet.dy;

      assert.equal(actualDx, 1);
      assert.equal(actualDy, 1);
    });
})

describe('Bullet constructor methods', function () {

    beforeEach(() => {
      bullet = new Bullet(0, 495, 1, 'red', 1, 1);
      // let args = { x: 0, y: 0, radius: 1, color: 'red', dx: 1, dy: 1};
      // let {x, y, radius, color, dx, dy} = args;
    });

    it('Should be able to move', function() {
      bullet.move();

      assert.isFunction(bullet.move);
      assert.equal(bullet.y, 494);
    });

    it('Should be able to continuously move', function() {
      bullet.move();
      bullet.move();

      assert.equal(bullet.y, 493);
    });
  })
})
