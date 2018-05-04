const GameComponents = require('./GameComponents.js')

class Shooter extends GameComponents {
  constructor(x, y, radius, color) {
    super(x, y, radius, color);
    this.x = x + this.radius;
    this.y = y + this.radius;
  }



}

module.exports = Shooter;