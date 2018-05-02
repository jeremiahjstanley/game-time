class CentipedeSegment {
  constructor(x, y) {
    this.radius = 10
    this.x = x + this.radius;
    this.y = y + this.radius;
    this.dx = 4;
  }
}

module.exports = CentipedeSegment;