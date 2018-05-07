const GameComponents = require('./GameComponents.js')

class CentipedeSegment extends GameComponents {
  constructor(x, y, radius, color, dx) {
    super(x = 1, y = 1, radius = 1, color = 'string', dx = 1);
    this.x = x + this.radius;
    this.y = y + this.radius;
  }



}

module.exports = CentipedeSegment;