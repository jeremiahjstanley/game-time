const CentipedeSegment = require('../lib/CentipedeSegment.js')

class Centipede {
  constructor(x = 0, y = 0) {
  this.x = x; 
  this.y = y;
  this.radius = 20
  this.color = 'black'; 
  this.segments;
  };

  populateSegments() {
    let segmentsArray = [];
    for (let i = 0; i < 10; i++) {
      segmentsArray[i] = 
      new CentipedeSegment((this.x + i * 40), this.y, this.radius, this.color);
    };
    this.segments = segmentsArray;
    console.log(this.segments)
  }


  move() {

    // const newX = this.segments[0].x +20;
    // const segment = new CentipedeSegment(newX, this.y, this.radius, this.color)
    const lastSegment = this.segments.pop();
    lastSegment.x += 5;

    this.segments.unshift(lastSegment);
    return this;
  }

  draw(context) {
    this.segments.forEach(segment => {
    context.beginPath();
    context.fillStyle = segment.color;
    context.arc(segment.x, segment.y, segment.radius, 0, Math.PI *2, false);
    context.closePath();
    context.fill();  
    })
  }

}


module.exports = Centipede;