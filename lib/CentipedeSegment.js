const GameComponents = require('./GameComponents.js')

class CentipedeSegment extends GameComponents {
  constructor(x, y, radius, color) {
    super(x, y, radius, color);
    this.x = x + this.radius;
    this.y = y + this.radius;
    this.dx = 5;
  }



}

module.exports = CentipedeSegment;