const Centipede = require('../lib/Centipede.js');

class GameComponents {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color; 
  };

  draw(context) {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
    return this
  };

}

module.exports = GameComponents;