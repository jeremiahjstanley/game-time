const GameComponents = require('./GameComponents.js');

class Bullet extends GameComponents {
  constructor(x, y, radius, color, dx, dy) {
    super(x, y, radius, color, dx, dy);
  }

  move() {
    this.y -= this.dy;
    return this
  }

}

module.exports = Bullet;