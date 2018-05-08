const chai = require('chai');
const assert = chai.assert;
const Centipede = require('../lib/Centipede.js')

describe('Centipede', function() {
  let centipede;
  describe('Centipede constructor', function() {

    beforeEach(() => {
      centipede = new Centipede(0, 0, 5, 'red', 1, 1);
    });

    it('Should have an x and y coordinate', function() {
      const expectedX = 0;
      const expectedY = 0; 

      const actualX = centipede.x;
      const actualY = centipede.y;
      
      assert.equal(actualX, 0);
      assert.equal(actualY, 0);
    });

    it('Should have a radius', function () {
      const expectedRadius = 5;

      const actualRadius = centipede.radius;

      assert.equal(actualRadius, 5);
    });

    it('Should have a diameter', function () {
      const expectedDiameter = 10;

      const actualDiameter = centipede.diameter;

      assert.equal(actualDiameter, 10);
    });

    it('Should have a color', function () {
      const expectedColor = 'red'

      const actualColor = centipede.color;

      assert.equal(actualColor, 'red');
    });

    it('should have a segments array', function() {
      const centipede = new Centipede(0, 0, 5, 'red', 1, 1);
      const expectedSegementsArray = [ ]

      const actualSegementsArray = centipede.segments;

      assert.deepEqual(actualSegementsArray, [ ]);
    });
  });

  describe ('Centipede constructor methods', function() {

    beforeEach(()=> {
      centipede = new Centipede(0, 0, 5, 'red', 1, 1);
    });

    it('should have the ability to add segments to the centipede array', function() {
      centipede.addSegmentsToCentipedeArray();

      assert.isFunction(centipede.addSegmentsToCentipedeArray);
      assert.equal(centipede.segments.length, 20);
    });

    it('should have the ability to move', function() {
    const centipede = new Centipede(0, 0, 5, 'red', 1, 1);
    centipede.addSegmentsToCentipedeArray();
    centipede.move();

    assert.isFunction(centipede.move);
    assert.equal(centipede.segments[0].x, 15);
    });
  });
});