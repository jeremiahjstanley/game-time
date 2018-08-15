const GameComponents = require('./GameComponents.js');

class Spider extends GameComponents {
  constructor(x, y, radius, color, dx, dy) {
    super(x, y, radius, color, dx, dy);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    return this;
  }

draw(context) {
    const img = new Image();
    img.src = '../images/spider.png';
    context.drawImage(img, (this.x - this.radius), (this.y - this.radius));
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.closePath();  
    return this;
  }

};

module.exports = Spider;