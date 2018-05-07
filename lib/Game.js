const Centipede = require('./Centipede.js');
const Shooter = require('./Shooter.js');
const Obstacles = require('./Obstacles.js');


class Game {
  constructor(context) {
    this.obstacles = new Obstacles(0, 0, 10, 'color');
    this.centipede = new Centipede(0, 0);
    this.shooter = new Shooter(350, 690, 10, 'red', 20, 20);
    this.context = context;
  }

  initialize() {
    this.centipede.populateSegments();
    this.obstacles.createMushroomArray()
    this.obstacles.hatchSpider();
  }

  procedure() {
    this.obstacles.populateMushrooms(this.context);
    this.centipede.move().draw(this.context);
    this.shooter.draw(this.context);
    this.obstacles.animateSpider(this.context);
    this.shooter.moveBullets(this.context);
    // detectCollision();
  }

  detectCollision() {
  //   this.centipede.segments.forEach(segment => {
  //     if (segment.x + segment.radius > game.width || segment.x - segment.radius < 0) {
  //     segment.dx = -segment.dx;
  //     segment.y += 20;
  //   } else if (segment.y + segment.radius > game.height || segment.y - segment.radius < 0) {
  //     segment.y = 10;
  //   }


  //     this.obstacles.mushrooms.forEach(mushroom => {
  //       let segmentX = this.centipede.segments.x;
  //       let segmentRadius = this.centipede.segments.radius;
  //       if (segmentX + segmentRadius === mushroom.x + mushroom.radius) {
  //         this.centipede.segment.dx = -this.centipede.segment.dx;
  //         this.centipede.segment.y += 20;
  //       }
  //     })
  //   })
  }


}

module.exports = Game;