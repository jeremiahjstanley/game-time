const GameComponents = require('./GameComponents.js');

class Bullet extends GameComponents {
  constructor(x, y, radius, color, dy) {
    super(x, y, radius, color);
    this.dy = dy;
  }

  move() {
    this.dy -= this.y;
  }

  // move(direction) {
  //   if (direction === 'left' && this.x - this.radius > 0) {
  //     this.x -= this.dx;
  //   } else if (direction === 'right' && this.x + this.radius < game.width) {
  //     this.x += this.dx;
  //   } else if (direction === 'up' && this.y > 490 ) {
  //     console.log(this.y)
  //     this.y -= this.dy;
  //   } else if (direction === 'down' && this.y + this.radius < game.width) {
  //     this.y += this.dy; 
  //   } 
  // } 

}

module.exports = Bullet;