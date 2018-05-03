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
      new CentipedeSegment(this.x, this.y, this.radius, this.color);
      this.x = this.x - 20;
    };
    this.segments = segmentsArray;
      console.log(this.segments);
  }

  move() {
    for (let i = 0; i < this.segments.length; i++) {

    }
  }




 // loop through all segments, call .move on each segment that updates each segment
}


  // draw(context) {
  //   console.log(this.segments);
  //   const segmentIndex = this.segments.map(segment => {
  //     const position = Object.assign({x: this.x, y: this.y})
  //     context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  //     context.fillStyle = 'blue'
  //     context.fill();
  //   });
  //   return this
  // };


// console.log(Centipede);

module.exports = Centipede;