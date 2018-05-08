const chai = require('chai');
const assert = chai.assert;
const GameComponents = require('../lib/GameComponents.js');

describe('GameComponents', function() { 
  it('Should be a constructor', function() {
    //setup
    const gameComponents = new GameComponents();
  });

  it('Should have an x and y coordinate', function() {
    //setup
    const gameComponents = new GameComponents(0, 0);
    const expectedX = this.x;
    const expectedY = this.y; 

    //execution
    const actualX = GameComponents.x;
    const actualY = GameComponents.y;
    
    //assert
    assert.equal(actualX, expectedX);
    assert.equal(actualY, expectedY);
  });

  it('Should have a radius', function () {
    //setup
    const gameComponents = new GameComponents(0, 0, 1);
    const expectedRadius = this.radius;

    //execution
    const actualRadius = GameComponents.radius;

    //assert
    assert.equal(actualRadius, expectedRadius);
  });

  it('Should have a color', function () {
    //setup
    const gameComponents = new GameComponents(0, 0, 1, 'red');
    const expectedColor = this.color;

    //execution
    const actualColor = GameComponents.color;

    //assert
    assert.equal(actualColor, expectedColor)
  });

  it('should have a x-velocity', function() {
    //setup
    const gameComponents = new GameComponents(0, 0, 1, 'red', 1, 1);
    const expectedDx = this.dx;

    //execution
    const actualDx = GameComponents.dx;

    //assert
    assert.equal(actualDx, expectedDx)
  });

  it('should have a y-velocity', function() {
    //setup
    const gameComponents = new GameComponents(0, 0, 1, 'red', 1, 1);
    const expectedDy = this.dy;

    //execution
    const actualDy = GameComponents.dy;

    //assert
    assert.equal(actualDy, expectedDy)
  });

});