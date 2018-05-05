const GameComponents = require('./GameComponents.js');

class Spider extends GameComponents {
  constructor(x, y, radius, color) {
    super(x, y, radius, color);
    this.dx;
    this.dy;
  }
}

module.exports = Spider;