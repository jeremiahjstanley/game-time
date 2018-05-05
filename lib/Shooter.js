const GameComponents = require('./GameComponents.js');
const Bullet = require('./Bullet.js');

class Shooter extends GameComponents {
  constructor(x, y, radius, color, dx, dy) {
    super(x, y, radius, color);
    this.dx = dx;
    this.dy = dy;
  }

  move(direction) {
    if (direction === 'left' && this.x - this.radius > 0) {
      this.x -= this.dx;
    } else if (direction === 'right' && this.x + this.radius < game.width) {
      this.x += this.dx;
    } else if (direction === 'up' && this.y > 490 ) {
      console.log(this.y)
      this.y -= this.dy;
    } else if (direction === 'down' && this.y + this.radius < game.width) {
      this.y += this.dy; 
    } 
  } 

  shoot(context) {
    console.log(context);
    const bullets = [];
    let bullet = new Bullet(this.x, (this.y - this.radius), 2, 'green', 60);
    bullet.move();
    bullets.push(bullet)
    console.log(bullet)
  }

}


module.exports = Shooter;