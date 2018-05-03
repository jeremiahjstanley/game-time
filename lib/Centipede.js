const CentipedeSegment = require('../lib/CentipedeSegment.js')

class Centipede {
  constructor(x = 0, y = 0) {
  this.x = x; 
  this.y = y; 
  this.segments;
  };

  populateSegments() {
    let segmentsArray = [];
    for (let i = 0; i < 10; i++) {
      segmentsArray[i] = new CentipedeSegment(this.x, this.y);
      this.x = this.x - 20;
    };
    this.segments = segmentsArray;
  }

  draw(context) {
    console.log(this);
    const segmentIndex = this.segments.map(segment => {
      const position = Object.assign({x: this.x, y: this.y})
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.fillStyle = 'blue'
      context.fill();
    });
    return this
  };

  move() {
    if (this.x + this.radius > 320 || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    this.x += this.dx;
    return this;
 };

 
}


// console.log(Centipede);

module.exports = Centipede;