const chai = require('chai');
const assert = chai.assert;
const Mushroom = require('../lib/Mushroom.js');

describe('Mushroom constructor', function() { 
  let mushroom;
  describe('Mushroom', function() {
    beforeEach(() => {
      mushroom = new Mushroom(0, 0, 1, 'red')
    })

    it('Should have an x and y coordinate', function() {
      const expectedX = 0;
      const expectedY = 0; 

      const actualX = mushroom.x;
      const actualY = mushroom.y;
    
      assert.equal(actualX, 0);
      assert.equal(actualY, 0);
    });

    it('Should have a radius', function () {
      const expectedRadius = 1;

      const actualRadius = mushroom.radius;

      assert.equal(actualRadius, 1);
    });

    it('Should have a color', function () {
      const expectedColor = 'red';

      const actualColor = mushroom.color;

      assert.equal(actualColor, 'red')
    });
  })
})