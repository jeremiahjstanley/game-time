const GameComponents = require('./GameComponents.js')

class CentipedeSegment extends GameComponents {
  constructor(x, y, radius, color) {
    super(x, y, radius, color);
    this.x = x + this.radius;
    this.y = y + this.radius;
    // this.dx = 3;
  }

 //  move() {
 //    // if (this.x + this.radius > 320 || this.x - this.radius < 0) {
 //    //   this.dx = -this.dx;
 //    // }
 //    // this.x += this.dx;
 //    // return this;
 // };

}

module.exports = CentipedeSegment;