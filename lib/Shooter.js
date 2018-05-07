const GameComponents = require('./GameComponents.js');
const Bullet = require('./Bullet.js');

class Shooter extends GameComponents {
  constructor(x, y, radius, color, dx, dy) {
    super(x, y, radius, color, dx, dy);
    this.bullets = [];
  }

  shoot() {
    let bullet = new Bullet(this.x, (this.y - this.radius), 2, '#8A96A6', 0, 5);
    console.log(bullet);
    this.bullets.push(bullet);
  }

  moveBullets(context) {
    let visibleBullets = this.bullets.filter(bullet => {
      return bullet.y > -5;
    });
   visibleBullets.map(bullet => {
      bullet.move().draw(context);
    });
  }

}


module.exports = Shooter;