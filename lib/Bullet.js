const GameComponents = require('./GameComponents.js');

class Bullet extends GameComponents {
  constructor(x, y, radius, color, dy) {
    super(x, y, radius, color);
    this.dy = dy;
  }

  move() {
    this.y -= this.dy;
  }

}

module.exports = Bullet;