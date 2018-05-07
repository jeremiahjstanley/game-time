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
    this.detectStationaryObjectCollision();
    this.detectBulletCollision()
  }

  getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }

  detectStationaryObjectCollision() {
    this.centipede.segments.forEach(segment => {
    if (segment.x + segment.radius > game.width || segment.x - segment.radius < 0) {
      segment.dx = -segment.dx;
      segment.y += 20;
    } else if (segment.y + segment.radius > game.height || segment.y - segment.radius < 0) {
      segment.y = 10;
    } this.obstacles.mushrooms.forEach(mushroom => {
        if (this.getDistance(segment.x, segment.y, mushroom.x, mushroom.y) - segment.radius * 2 < 0) {
          segment.dx = -segment.dx;
          segment.y += 20;
        }
      })
    });
    return this;
  };

  detectBulletCollision() {
    this.shooter.bullets.forEach((bullet, bulletIndex, bulletsArray) => {
      this.centipede.segments.forEach((segment, segmentIndex, segmentsArray) => {
          if (this.getDistance(segment.x, segment.y, bullet.x, bullet.y) - segment.radius * 2 < 0) {
            segmentsArray.splice(segmentIndex, 1);
            bulletsArray.splice(bulletIndex, 1);
          }
      }); 
    });
    return this;
  }





}

module.exports = Game;