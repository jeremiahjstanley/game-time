const chai = require('chai');
const assert = chai.assert;
const CentipedeSegment = require('../lib/CentipedeSegment.js')

describe('CentipedeSegment', function() { 
  it('Should be a constructor', function() {
    //setup
    const centipedeSegment = new CentipedeSegment();
  });

  it('Should have an x and y coordinate', function() {
    //setup
    const centipedeSegment = new CentipedeSegment();
    const expectedX = this.x;
    const expectedY = this.y; 

    //execution
    const actualX = CentipedeSegment.x;
    const actualY = CentipedeSegment.y;
    
    //assert
    assert.equal(actualX, expectedX);
    assert.equal(actualY, expectedY);

  });

  it('Should have a radius', function () {
    //setup
    const centipedeSegment = new CentipedeSegment();
    const expectedRadius = this.radius;

    //execution
    const actualRadius = CentipedeSegment.radius;

    //assert
    assert.equal(actualRadius, expectedRadius);

  })

  it('Should have a color', function () {
    //setup
    const centipedeSegment = new CentipedeSegment();
    const expectedColor = this.color;

    //execution
    const actualColor = CentipedeSegment.color;

    //assert
    assert.equal(actualColor, expectedColor)

  })

  it('should have a x-velocity', function() {
    //setup
    const centipedeSegment = new CentipedeSegment();
    const expectedDx = this.dx;

    //execution
    const actualDx = CentipedeSegment.dx;

    //assert
    assert.equal(actualDx, expectedDx)

  })

});
