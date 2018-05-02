class CentipedeSegment {
  constructor(x, y) {
    this.radius = 20
    this.x = x + this.radius;
    this.y = y + this.radius;
    this.dx = 4;
  } 

  draw(context) {
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = 'blue'
    context.fill();
    return this
  }

  move() {
    if (this.x + this.radius > 320 || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    this.x += this.dx;

    return this;
 
  }
}

module.exports = CentipedeSegment;