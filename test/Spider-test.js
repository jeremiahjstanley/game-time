const chai = require('chai');
const assert = chai.assert;
const Spider = require('../lib/Spider.js');


describe('Spider', function() {
  let spider;
  describe('Spider constructor', function() { 

    beforeEach(() => {
      spider = new Spider(0, 0, 1, 'red', 1, 1)
    });

  it('Should have an x and y coordinate', function() {
    const expectedX = 0;
    const expectedY = 0; 

    const actualX = spider.x;
    const actualY = spider.y;
    
    assert.equal(actualX, 0);
    assert.equal(actualY, 0);
  });

  it('Should have a radius', function () {
    const expectedRadius = this.radius;

    const actualRadius = 1;

    assert.equal(actualRadius, 1);
  });

  it('Should have a color', function () {
    const expectedColor = 'red';

    const actualColor = spider.color;

    assert.equal(actualColor, 'red');
  });

  it('should have a x-velocity', function() {
    const expectedDx = 1;

    const actualDx = spider.dx;

    assert.equal(actualDx, 1);
  });

  it('should have a y-velocity', function() {
    const expectedDy = 1;

    const actualDy = spider.dy;

    assert.equal(actualDy, 1);
  });
})

describe('methods of spider', function() {

    beforeEach(() => {
      spider = new Spider(0, 0, 1, 'red', 1, 1)
    });

    it('should have the ability to move', function() {
      spider.move();

      assert.isFunction(spider.move)
      assert.equal(spider.x, 1);
      assert.equal(spider.y, 1);
    });  
  })
});