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
    const spider = new Spider();
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
    const spider = new Spider();
    const expectedRadius = this.radius;

    //execution
    const actualRadius = Spider.radius;

    //assert
    assert.equal(actualRadius, expectedRadius);

  });

  it('Should have a diameter', function () {
    //setup
    const spider = new Spider();
    const expectedDiameter = this.diameter;

    //execution
    const actualDiameter = Spider.diameter;

    //assert
    assert.equal(expectedDiameter, expectedDiameter);

  });

  it('Should have a color', function () {
    //setup
    const spider = new Spider();
    const expectedColor = this.color;

    //execution
    const actualColor = Spider.color;

    //assert
    assert.equal(actualColor, expectedColor)

  });


    it('should have the ability to move', function() {
    //setup
    const spider = new Spider();

    //execution
    spider.move();

    //assert
    assert.equal(spider.x, 2);
    assert.equal(spider.y, 2);
  });

});