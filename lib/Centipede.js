const CentipedeSegment = require('../lib/CentipedeSegment.js');
const Obstacles = require('./Obstacles.js');
const Mushroom = require('./Mushroom.js');

class Centipede {
  constructor(x = 0, y = 0, radius = 5, color = '#2A2F45') {
    this.x = x; 
    this.y = y;
    this.radius = radius;
    this.diameter = this.radius * 2;
    this.color = color; 
    this.segments = [];
  }

  addSegmentsToCentipedeArray() {
    let segmentsArray = [];
    for (let i = 0; i < 20; i++) {
      const x = this.x + i * this.diameter;
      segmentsArray[i] = 
      new CentipedeSegment(x, this.y, this.radius, this.color, 10);
    };
    this.segments = segmentsArray;
  }

  move() {
    this.segments.forEach(segment => {
      segment.x += segment.dx
    });
    return this;
  }
  
  draw(context) {
    this.segments.forEach(segment => {
    context.beginPath();
    context.fillStyle = segment.color;
    context.arc(segment.x, segment.y, segment.radius, 0, Math.PI *2, false);
    context.closePath();
    context.fill();  
    });
    return this;
  }

}


module.exports = Centipede;