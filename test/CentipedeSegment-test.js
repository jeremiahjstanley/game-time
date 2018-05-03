const chai = require('chai');
const assert = chai.assert;

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

  it('Should have a ')

});