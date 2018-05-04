const Centipede = require('../lib/Centipede.js');

class GameComponents {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color; 
  };

   draw(context) {
      this.centipede.draw(context);
      // this.shooter.draw(context);
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.fillStyle = this.color;
      context.fill();
      return this
  };

  move() {
    centipede.move()
  }
}

module.exports = GameComponents;