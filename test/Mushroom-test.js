const chai = require('chai');
const assert = chai.assert;
const Mushroom = require('../lib/Mushroom.js');

describe('Mushroom', function() { 
  it('Should be a constructor', function() {
    //setup
    const mushroom = new Mushroom();
  });

  it('Should have an x and y coordinate', function() {
    //setup
    const mushroom = new Mushroom(1, 1, 1, 'red');
    const expectedX = this.x;
    const expectedY = this.y; 

    //execution
    const actualX = Mushroom.x;
    const actualY = Mushroom.y;
    
    //assert
    assert.equal(actualX, expectedX);
    assert.equal(actualY, expectedY);

  });

  it('Should have a radius', function () {
    //setup
    const mushroom = new Mushroom(1, 1, 1, 'red');
    const expectedRadius = this.radius;

    //execution
    const actualRadius = Mushroom.radius;

    //assert
    assert.equal(actualRadius, expectedRadius);

  });

  it('Should have a diameter', function () {
    //setup
    const mushroom = new Mushroom(1, 1, 1, 'red');
    const expectedDiameter = this.diameter;

    //execution
    const actualDiameter = Mushroom.diameter;

    //assert
    assert.equal(expectedDiameter, expectedDiameter);

  });

  it('Should have a color', function () {
    //setup
    const mushroom = new Mushroom(1, 1, 1, 'red');
    const expectedColor = this.color;

    //execution
    const actualColor = Mushroom.color;

    //assert
    assert.equal(actualColor, expectedColor)

  });


   

});