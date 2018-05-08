const Centipede = require('./Centipede.js');
const Shooter = require('./Shooter.js');
const Obstacles = require('./Obstacles.js');


class Game {
  constructor(context) {
    this.obstacles = new Obstacles(0, 0, 5, '#993C32', 5, 5);
    this.centipede = new Centipede(0, 0, 5, '#993C32');
    this.shooter = new Shooter(255, 495, 5, '#326099', 10, 10);
    this.context = context;
    this.lives = 5;
    this.score = 0;
  }

  initialize() {
    this.centipede.addSegmentsToCentipedeArray();
    this.obstacles.createMushroomsArray();
    this.obstacles.hatchSpider();
  }

  procedure() {
    this.centipede.move().draw(this.context);
    this.shooter.draw(this.context);
    this.obstacles.spider.move().draw(this.context);
    this.obstacles.rehatchSpider();
    
    this.moveBullets(this.context);
    this.drawMushroomsArray(this.context);
    this.detectCentipedeWallCollision();
    this.detectBulletCollision();
    this.detectCentipedeShooterCollision();
    this.spiderCollisionDetection();
    this.detectShooterMushroomCollision();
  }

  levelUp() {
     this.centipede = new Centipede(0, 0);
     this.initialize();
     this.shooter.bullets.splice(0, this.shooter.bullets.length);
     this.centipede.segments.forEach(segment => {
        segment.dx += 1;
     })
  }

  getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }

  drawMushroomsArray(context) {
    this.obstacles.mushrooms.forEach(mushroom => {
      mushroom.draw(context);
    });
  }

  detectCentipedeWallCollision() {
    this.centipede.segments.forEach(segment => {
      if (segment.x + segment.radius > game.width || segment.x - segment.radius < 0) {
        segment.dx = -segment.dx;
        segment.y += 10;
      } else if (segment.y + segment.radius > game.height || segment.y - segment.radius < 0) {
        segment.y = 5;
      } this.detectCentipedeMushroomCollision(segment)
    });
    return this;
  }

  detectCentipedeMushroomCollision(segment) {
     this.obstacles.mushrooms.forEach(mushroom => {
        if (this.getDistance(segment.x, segment.y, mushroom.x, mushroom.y) - segment.radius * 2 < 0) {
          segment.dx = -segment.dx;
          segment.y += 10;
        }
      });
  }

  detectShooterMushroomCollision() {
    this.obstacles.mushrooms.forEach(mushroom => {
        if (this.getDistance(this.shooter.x, this.shooter.y, mushroom.x, mushroom.y) - this.shooter.radius * 2 < 0) {
          // this.shooter.x += this.shooter.dx;
          this.shooter.y += this.shooter.dy;
        }
      });
    return this;
  }

  moveShooter(direction) {
    if (direction === 'left' && this.shooter.x - this.shooter.radius > 0) {
      this.shooter.x -= this.shooter.dx;
    } else if (direction === 'right' && this.shooter.x + this.shooter.radius < game.width) {
      this.shooter.x += this.shooter.dx;
    } else if (direction === 'up' && this.shooter.y > 400 ) {
      this.shooter.y -= this.shooter.dy;
    } else if (direction === 'down' && this.shooter.y + this.shooter.radius < game.width) {
      this.shooter.y += this.shooter.dy; 
    } 
  } 

  moveBullets(context) {
    let visibleBullets = this.shooter.bullets.filter(bullet => {
      return bullet.y > -5;
    });
   visibleBullets.map(bullet => {
      bullet.move().draw(context);
    });
  }

  detectBulletCollision() {
    this.shooter.bullets.forEach((bullet, bulletIndex, bulletsArray) => {
      this.detectBulletSpiderCollision(bullet, bulletIndex, bulletsArray);
      this.detectBulletCentipedeCollision(bullet, bulletIndex, bulletsArray);    
    });
    return this;
  }

  detectBulletSpiderCollision(bullet, bulletIndex, bulletsArray) {  
    this.obstacles.spiders.forEach((spider, spiderIndex, spidersArray) => { 
      if (this.getDistance(spider.x, spider.y, bullet.x, bullet.y) - spider.radius * 2 < 0) {
        spidersArray.splice(spiderIndex, 1);
        bulletsArray.splice(bulletIndex, 1);
        this.score += 500;
      }
    });
    return this;
  } 

  detectBulletCentipedeCollision(bullet, bulletIndex, bulletsArray) {
    this.centipede.segments.forEach((segment, segmentIndex, segmentsArray) => {
      if (this.getDistance(segment.x, segment.y, bullet.x, bullet.y) - segment.radius * 2 < 0) {
        this.obstacles.addNewMushroomToArray(segment.x, segment.y)
        segmentsArray.splice(segmentIndex, 1);
        bulletsArray.splice(bulletIndex, 1);
        this.score += 250;
      } 
      if (this.centipede.segments.length === 0) {
        this.levelUp();
      }
    });
    return this;
  }

  detectCentipedeShooterCollision() {
    this.centipede.segments.forEach(segment => {
      if(this.getDistance(segment.x, segment.y, this.shooter.x, this.shooter.y) - segment.radius * 2 < 0) {
        this.initialize();
        this.shooter.x = 250; 
        this.shooter.y = 495;
        this.lives--;
        this.score -= 100;
      };
    });
    return this;
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
      };
    return this;
  }



};

module.exports = Game;