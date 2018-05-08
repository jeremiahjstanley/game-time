const GameComponents = require('./GameComponents.js')

class CentipedeSegment extends GameComponents {
  constructor(x, y, radius, color, dx) {
    super(x, y, radius, color, dx);
    this.x = x + this.radius;
    this.y = y + this.radius;
  }

};

module.exports = CentipedeSegment;