const chai = require('chai');
const assert = chai.assert;
const Centipede = require('../lib/Centipede.js')

describe('Centipede', function() { 
  it('Should be a constructor', function() {
    //setup
    const centipede = new Centipede();
  });

  it('Should have an x and y coordinate', function() {
    //setup
    const centipede = new Centipede(0, 0);
    const expectedX = this.x;
    const expectedY = this.y; 

    //execution
    const actualX = Centipede.x;
    const actualY = Centipede.y;
    
    //assert
    assert.equal(actualX, expectedX);
    assert.equal(actualY, expectedY);

  });

  it('Should have a radius', function () {
    //setup
    const centipede = new Centipede(0, 0, 5);
    const expectedRadius = this.radius;

    //execution
    const actualRadius = Centipede.radius;

    //assert
    assert.equal(actualRadius, expectedRadius);

  });

  it('Should have a diameter', function () {
    //setup
    const centipede = new Centipede(0, 0, 5);
    const expectedDiameter = this.diameter;

    //execution
    const actualDiameter = Centipede.diameter;

    //assert
    assert.equal(expectedDiameter, expectedDiameter);

  });

  it('Should have a color', function () {
    //setup
    const centipede = new Centipede(0, 0, 5, 'red');
    const expectedColor = this.color;

    //execution
    const actualColor = Centipede.color;

    //assert
    assert.equal(actualColor, expectedColor);

  });

  it('should have a segments array', function() {
    //setup
    const centipede = new Centipede(0, 0, 5, 'red', 1, 1);
    const expectedSegementsArray = this.segments;

    //execution
    const actualSegementsArray = Centipede.segments;

    //assert
    assert.equal(expectedSegementsArray, actualSegementsArray);

  });

  it('should have the ability to add segments to the centipede array', function() {
    //setup
    const centipede = new Centipede(0, 0, 5, 'red', 1, 1);

    //execution
    centipede.addSegmentsToCentipedeArray();

    //assert
    assert.isFunction(centipede.addSegmentsToCentipedeArray);
    assert.equal(centipede.segments.length, 20);
  });

    it('should have the ability to move', function() {
    //setup
    const centipede = new Centipede(0, 0, 5, 'red', 1, 1);

    //execution
    centipede.addSegmentsToCentipedeArray();
    centipede.move();

    //assert
    assert.isFunction(centipede.move);
    assert.equal(centipede.segments[0].x, 15);
  });

});