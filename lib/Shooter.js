const GameComponents = require('./GameComponents.js');
const Bullet = require('./Bullet.js');

class Shooter extends GameComponents {
  constructor(x, y, radius, color, dx, dy) {
    super(x, y, radius, color, dx, dy);
    this.bullets = [];
  }

  shoot() {
    let y = this.y - this.radius
    let bullet = new Bullet(this.x, y, 2, '#FF3A5F', 0, 5);
    this.bullets.push(bullet);
  }

draw(context) {
    const img = new Image();
    img.src = '../images/shooter.png';
    context.drawImage(img, (this.x - this.radius), (this.y - this.radius));
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.closePath();  
    return this;
  }

};


module.exports = Shooter;