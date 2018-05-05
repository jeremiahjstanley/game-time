const GameComponents = require('./GameComponents.js')

class Shooter extends GameComponents {
  constructor(x, y, radius, color, dx, dy) {
    super(x, y, radius, color);
    this.dx = dx;
    this.dy = dy;
  }

  move(direction) {
    if (direction === 'left') {
      this.x -= this.dx;
    } if (direction === 'right') {
      this.x = this.x + this.dx;
    } if (direction === 'up') {
      this.y = this.y - this.dy;
    } if (direction === 'down') {
      this.y = this.y + this.dy; 
    }
  }

}

module.exports = Shooter;