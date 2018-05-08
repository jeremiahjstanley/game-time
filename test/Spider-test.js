const chai = require('chai');
const assert = chai.assert;
const Spider = require('../lib/Spider.js');

describe('Spider', function() { 
  it('Should be a constructor', function() {
    //setup
    const spider = new Spider();
  });

  it('Should have an x and y coordinate', function() {
    //setup
    const spider = new Spider(0, 0);
    const expectedX = this.x;
    const expectedY = this.y; 

    //execution
    const actualX = Spider.x;
    const actualY = Spider.y;
    
    //assert
    assert.equal(actualX, expectedX);
    assert.equal(actualY, expectedY);
  });

  it('Should have a radius', function () {
    //setup
    const spider = new Spider(0, 0, 1);
    const expectedRadius = this.radius;

    //execution
    const actualRadius = Spider.radius;

    //assert
    assert.equal(actualRadius, expectedRadius);
  });

  it('Should have a color', function () {
    //setup
    const spider = new Spider(0, 0, 1, 'red');
    const expectedColor = this.color;

    //execution
    const actualColor = Spider.color;

    //assert
    assert.equal(actualColor, expectedColor)
  });

  it('should have a x-velocity', function() {
    //setup
    const spider = new Spider(0, 0, 1, 'red', 1, 1);
    const expectedDx = this.dx;

    //execution
    const actualDx = Spider.dx;

    //assert
    assert.equal(actualDx, expectedDx)
  });

  it('should have a y-velocity', function() {
    //setup
    const spider = new Spider(0, 0, 1, 'red', 1, 1);
    const expectedDy = this.dy;

    //execution
    const actualDy = Spider.dy;

    //assert
    assert.equal(actualDy, expectedDy)
  });

    it('should have the ability to move', function() {
    //setup
    const spider = new Spider(0, 0, 1, 'red', 1, 1);

    //execution
    spider.move();

    //assert
    assert.isFunction(spider.move)
    assert.equal(spider.x, 1);
    assert.equal(spider.y, 1);
  });

});