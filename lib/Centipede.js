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
    for (let i = 0; i < 2; i++) {
      segmentsArray[i] = 
      new CentipedeSegment((this.x + i * 40), this.y, this.radius, this.color);
    };
    this.segments = segmentsArray;
    console.log(this.segments)
  }


  move() {
    const pace = 5
    const lastSegment = this.segments.pop();
    if (lastSegment.x + this.radius > 320 || lastSegment.x + this.radius < 0) {
      lastSegment.x = -pace; 
      lastSegment.y += 40
    } else {
      lastSegment.x += pace;
    }

    this.segments.unshift(lastSegment);
    return this;



     //  move() {
 //    // if (this.x + this.radius > 320 || this.x - this.radius < 0) {
 //    //   this.dx = -this.dx;
 //    // }
 //    // this.x += this.dx;
 //    // return this;
 // };
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