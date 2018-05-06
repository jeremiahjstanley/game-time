const GameComponents = require('./GameComponents.js');

class Spider extends GameComponents {
  constructor(x, y, radius, color, this.dx, this.dy) {
    super(x, y, radius, color);
    this.dx = 4;
    this.dy = 3;
  }

  move() {
    if (this.x + this.radius > game.width || this.x - this.radius < 0) {
      this.dx = -this.dx
    } else if (this.y + this.radius > game.height || this.y - this.radius < 200) {
      this.dy = -this..dy
    }

  this.x += dx;
  this.y += this.dy;
}

module.exports = Spider;