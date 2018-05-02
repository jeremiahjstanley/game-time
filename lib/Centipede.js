const CentipedeSegment = require('../lib/CentipedeSegment.js')

class Centipede {
  constructor() {
  this.segments = []
  for (let i = 0; i < 10; i++) {
    this.segments[i] = new CentipedeSegment(0, 0);
    console.log(this.segments)
  };
  };



  draw(context) {
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.fillStyle = 'blue'
      context.fill();
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