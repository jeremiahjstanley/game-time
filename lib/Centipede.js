class Centipede {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocityX = 4;
  } 

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this
  }

  move() {
      this.x += 1;
    if (this.x > 0) {
      this.velocityX = 4 
    } else if (this.x > 300) {
      this.velocityX = -4
      // this.x -= 2; 
    }
    return this;
 
  }
}

module.exports = Centipede;