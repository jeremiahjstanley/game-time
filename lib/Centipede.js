const CentipedeSegment = require('../lib/CentipedeSegment.js');
const GameComponents = require('./GameComponents.js');
const Obstacles = require('./Obstacles.js');
const Mushroom = require('./Mushroom.js');

const mushroomArray = Obstacles.mushrooms;

console.log(mushroomArray)


class Centipede {
  constructor(x = 0, y = 0) {
    this.x = x; 
    this.y = y;
    this.radius = 10;
    this.color = 'black'; 
    this.segments = [];
  };

  populateSegments() {
    let segmentsArray = [];
    for (let i = 0; i < 10; i++) {
      segmentsArray[i] = 
      new CentipedeSegment((this.x + i * 20), this.y, this.radius, this.color);
    };
    this.segments = segmentsArray;
  }

  move() {
    this.segments.forEach(segment => {
      segment.x += segment.dx;
    if (segment.x + segment.radius > game.width || segment.x - segment.radius < 0) {
      segment.dx = -segment.dx;
      segment.y += 20;
    } else if (segment.y + segment.radius > game.height || segment.y - segment.radius < 0) {
      segment.y = 10;
    }
    });
    return this;
  };


  
  draw(context) {
    this.segments.forEach(segment => {
    context.beginPath();
    context.fillStyle = segment.color;
    context.arc(segment.x, segment.y, segment.radius, 0, Math.PI *2, false);
    context.closePath();
    context.fill();  
    });
  }

}


module.exports = Centipede;