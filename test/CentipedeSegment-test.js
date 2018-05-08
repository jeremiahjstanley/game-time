const chai = require('chai');
const assert = chai.assert;
const CentipedeSegment = require('../lib/CentipedeSegment.js')

describe('Centipede Segment', function() {
  let centipedeSegment 
  describe('Centipede Segment Constructor', function() {

    beforeEach(() => {
      centipedeSegment = new CentipedeSegment(0, 0, 1, 'red', 1);
    });

    it('Should have an x and y coordinate', function() {
      const expectedX = 1;
      const expectedY = 1; 

      const actualX = centipedeSegment.x;
      const actualY = centipedeSegment.y;
      
      assert.equal(actualX, 1);
      assert.equal(actualY, 1);
    });

    it('Should have a radius', function () {
      const expectedRadius = 1;

      const actualRadius = centipedeSegment.radius;

      assert.equal(actualRadius, 1);
    });

    it('Should have a color', function () {
      const expectedColor = 'red';

      const actualColor = centipedeSegment.color;

      assert.equal(actualColor, 'red')
    });

    it('should have a x-velocity', function() {
      //setup
      const centipedeSegment = new CentipedeSegment(0, 0, 1, 'red', 1);
      const expectedDx = 1;

      const actualDx = centipedeSegment.dx;

      assert.equal(actualDx, 1)
    });
  })
});
