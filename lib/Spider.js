const GameComponents = require('./GameComponents.js');

class Spider extends GameComponents {
  constructor(x, y, radius, color, dx, dy) {
    super(x, y, radius, color);
    this.dx = dx;
    this.dy = dy;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x + this.radius === 710 || this.x - this.radius === -10) {
      this.dx = -this.dx;
    } else if (this.y + this.radius === game.height || this.y - this.radius === 200) {
      this.dy = -this.dy
    }
    return this;
  }

}
module.exports = Spider;