const Centipede = require('./Centipede.js');
const Shooter = require('./Shooter.js');
const Obstacles = require('./Obstacles.js');


class Game {
  constructor(context) {
    this.obstacles = new Obstacles(0, 0, 5, 'color');
    this.centipede = new Centipede(0, 0);
    this.shooter = new Shooter(250, 495, 5, 'red', 20, 20);
    this.context = context;
    this.lives = 3;
    this.score = 0;
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
    this.obstacles.spider.move().draw(this.context);
    this.shooter.moveBullets(this.context);
    this.detectStationaryObjectCollision();
    this.detectBulletCollision();
    this.detectShooterCollision();
    this.spiderCollisionDetection();
    // this.obstacles.spider.regenerateSpider();
  }

  levelUp() {
     this.centipede = new Centipede(0, 0);
     this.initialize();
     this.shooter.bullets.splice(0, this.shooter.bullets.length)
     console.log(this.shooter.bullets.length)
     this.centipede.segments.forEach(segment => {
        segment.dx += 1
     })
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
      segment.y += 10;
    } else if (segment.y + segment.radius > game.height || segment.y - segment.radius < 0) {
      segment.y = 5;
    } this.obstacles.mushrooms.forEach(mushroom => {
        if (this.getDistance(segment.x, segment.y, mushroom.x, mushroom.y) - segment.radius * 2 < 0) {
          segment.dx = -segment.dx;
          segment.y += 10;
        }
      })
    });
    return this;
  };

  detectBulletCollision() {
    this.shooter.bullets.forEach((bullet, bulletIndex, bulletsArray) => {
      this.obstacles.spiders.forEach((spider, spiderIndex, spidersArray) => { 
        if (this.getDistance(this.obstacles.spider.x, this.obstacles.spider.y, bullet.x, bullet.y) - this.obstacles.spider.radius * 2 < 0) {
          spidersArray.splice(spiderIndex, 1);
          bulletsArray.splice(bulletIndex, 1);
          this.score += 500;
        }
      });
      this.centipede.segments.forEach((segment, segmentIndex, segmentsArray) => {
          if (this.getDistance(segment.x, segment.y, bullet.x, bullet.y) - segment.radius * 2 < 0) {
            segmentsArray.splice(segmentIndex, 1);
            bulletsArray.splice(bulletIndex, 1);
            this.score += 250;
          } 
      }); 
      if (this.centipede.segments.length === 0) {
            this.levelUp();
          }
    });
    return this;
  }

  detectShooterCollision() {
    this.centipede.segments.forEach(segment => {
      if(this.getDistance(segment.x, segment.y, this.shooter.x, this.shooter.y) - segment.radius * 2 < 0) {
        this.initialize();
        this.shooter.x = 250; 
        this.shooter.y = 495;
        this.lives--;
        this.score -= 100;
      }
    })

  }

spiderCollisionDetection() {
  if (this.obstacles.spider.x + this.obstacles.spider.radius === 710 || this.obstacles.spider.x - this.obstacles.spider.radius === -100) {
      this.obstacles.spider.dx = -this.obstacles.spider.dx;
    } else if (this.obstacles.spider.y + this.obstacles.spider.radius === game.height || this.obstacles.spider.y - this.obstacles.spider.radius === 200) {
      this.obstacles.spider.dy = -this.obstacles.spider.dy
    } else if (this.getDistance(this.obstacles.spider.x, this.obstacles.spider.y, this.shooter.x, this.shooter.y) - this.obstacles.spider.radius * 2 < 0) {
      this.initialize();
      this.shooter.x = 250; 
      this.shooter.y = 495;
      this.lives--;
      this.score -= 250;
    }
}



}

module.exports = Game;