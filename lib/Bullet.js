const GameComponents = require('./GameComponents.js');

class Bullet extends GameComponents {
  constructor(x, y, radius, color, dx, dy) {
    super(x = 1, y = 1, radius = 1, color = 'string', dx = 1, dy = 1);
  }

  move() {
    this.y -= this.dy;
    return this
  }

}

module.exports = Bullet;