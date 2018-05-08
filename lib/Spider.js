const GameComponents = require('./GameComponents.js');

class Spider extends GameComponents {
  constructor(x, y, radius, color, dx, dy) {
    super(x, y, radius, color, dx, dy);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    return this;
  }


}
module.exports = Spider;