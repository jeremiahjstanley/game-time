const GameComponents = require('./GameComponents.js');
const Bullet = require('./Bullet.js');

class Shooter extends GameComponents {
  constructor(x, y, radius, color, dx, dy) {
    super(x, y, radius, color, dx, dy);
    this.bullets = [];
  }

  shoot() {
    let bullet = new Bullet(this.x, (this.y - this.radius), 2, '#8A96A6', 0, 5);
    this.bullets.push(bullet);
  }

};


module.exports = Shooter;