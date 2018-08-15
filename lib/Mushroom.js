const GameComponents = require('./GameComponents.js');

class Mushroom extends GameComponents {
  constructor(x, y, radius, color, dx = null, dy = null) {
    super(x, y, radius, color, dx, dy);
    this.density = 3;
  }

draw(context) {
    const img = new Image();
    img.src = '../images/mushroom.png';
    context.drawImage(img, (this.x - this.radius), (this.y - this.radius));
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.closePath();
    return this;
  }

};

module.exports = Mushroom;