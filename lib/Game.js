const Centipede = require('./Centipede.js');
const Shooter = require('./Shooter.js');
const Obstacles = require('./Obstacles.js');

let targetHitAudio = new Audio('/audio/targethit.wav');
let playerHitAudio = new Audio('/audio/playerdies.wav');
let levelupAudio = new Audio('/audio/levelup.wav');


class Game {
  constructor() {
    this.obstacles = new Obstacles(0, 0, 5, '#BAEB79', 5, 5);
    this.centipede = new Centipede(0, 0, 5, '#2A2F45');
    this.shooter = new Shooter(255, 495, 5, '#BD1147', 10, 10);
    this.lives = 3;
    this.score = 0;
  }

  initialize() {
    this.centipede.addSegmentsToCentipedeArray();
    this.obstacles.createMushroomsArray();
    this.obstacles.hatchSpider();
  }

  procedure(context) {
    this.centipede.move().draw(context);
    this.shooter.draw(context);
    this.obstacles.spider.move().draw(context);
    this.obstacles.rehatchSpider();
    
    this.moveBullets(context);
    this.drawMushroomsArray(context);
    this.detectCentipedeWallCollision();
    this.detectBulletCollision();
    this.detectCentipedeShooterCollision();
    this.spiderCollisionDetection();
  }

  levelUp() {
    levelupAudio.play();
    this.centipede = new Centipede(0, 0);
    this.initialize();
    this.shooter.bullets.splice(0, this.shooter.bullets.length);
    this.centipede.segments.forEach(segment => {
        segment.dx += 5;
    });
  }

  levelDown(score) {
    this.initialize();
    this.shooter.x = 255; 
    this.shooter.y = 495;
    this.lives--;
    this.score += score;
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

  moveShooter(direction) {
    const leftWallCollision = direction === 'left' && this.shooter.x - this.shooter.radius > 0
    const rightWallCollision = direction === 'right' && this.shooter.x + this.shooter.radius < canvas.width
    const topBoundaryCollision = direction === 'up' && this.shooter.y > 400
    const bottomWallCollision = direction === 'down' && this.shooter.y + this.shooter.radius < canvas.width
    if (leftWallCollision) {
      this.shooter.x -= this.shooter.dx;
    } else if (rightWallCollision) {
      this.shooter.x += this.shooter.dx;
    } else if (topBoundaryCollision) {
      this.shooter.y -= this.shooter.dy;
    } else if (bottomWallCollision) {
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

  detectCentipedeWallCollision() {
    this.centipede.segments.forEach(segment => {
      if (segment.x + segment.radius > canvas.width || segment.x - segment.radius < 0) {
        segment.dx = -segment.dx;
        segment.y += 10;
      } else if (segment.y + segment.radius > canvas.height || segment.y - segment.radius < 0) {
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

  detectShooterMushroomCollision(direction) {
    const leftMushroomCollision = direction === 'left'
    const rightMushroomCollision = direction === 'right'
    const upMushroomCollision = direction === 'up' 
    const downMushromCollision = direction === 'down'
    this.obstacles.mushrooms.forEach(mushroom => {
        if (this.getDistance(this.shooter.x, this.shooter.y, mushroom.x, mushroom.y) - this.shooter.radius * 2 < 0) {
        if (leftMushroomCollision) {
          this.shooter.x += this.shooter.dx;
        } else if (rightMushroomCollision) {
          this.shooter.x -= this.shooter.dx;
        } else if (upMushroomCollision) {
          this.shooter.y += this.shooter.dy;
        } else if (downMushromCollision) {
          this.shooter.y -= this.shooter.dy; 
        } 
      } 
    });
    return this;
  }
  
  detectBulletCollision() {
    this.shooter.bullets.forEach((bullet, bulletIndex, bulletsArray) => {
      this.detectBulletSpiderCollision(bullet, bulletIndex, bulletsArray);
      this.detectBulletCentipedeCollision(bullet, bulletIndex, bulletsArray);
      this.detectBulletMushroomCollision(bullet, bulletIndex, bulletsArray);    
    });
    return this;
  }

  detectBulletSpiderCollision(bullet, bulletIndex, bulletsArray) {  
    this.obstacles.spiders.forEach((spider, spiderIndex, spidersArray) => { 
      if (this.getDistance(spider.x, spider.y, bullet.x, bullet.y) - spider.radius * 2 < 0) {
        spidersArray.splice(spiderIndex, 1);
        bulletsArray.splice(bulletIndex, 1);
        this.score += 500;
        targetHitAudio.play()
        this.obstacles.rehatchSpider();
      }
    });
    return this;
  } 

  detectBulletMushroomCollision(bullet, bulletIndex, bulletsArray) {
    this.obstacles.mushrooms.forEach((mushroom, mushroomIndex, mushroomArray) => {
      if (this.getDistance(mushroom.x, mushroom.y, bullet.x, bullet.y) - mushroom.radius * 2 < 0) {
        mushroom.density--
        mushroom.color
        bulletsArray.splice(bulletIndex, 1);
        targetHitAudio.play()
      }
      if (mushroom.density == 0) {
        mushroomArray.splice(mushroomIndex, 1);
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
        targetHitAudio.play()
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
        this.levelDown(-100);
        playerHitAudio.play()
      };
    });
    return this;
  }

  spiderCollisionDetection() {
    if (this.obstacles.spider.x + this.obstacles.spider.radius === 700 || this.obstacles.spider.x - this.obstacles.spider.radius === -200) {
        this.obstacles.spider.dx = -this.obstacles.spider.dx;
    } else if (this.obstacles.spider.y + this.obstacles.spider.radius === canvas.height || this.obstacles.spider.y - this.obstacles.spider.radius === 200) {
        this.obstacles.spider.dy = -this.obstacles.spider.dy
    } else if (this.getDistance(this.obstacles.spider.x, this.obstacles.spider.y, this.shooter.x, this.shooter.y) - this.obstacles.spider.radius * 2 < 0) {
        this.levelDown(-250);
        playerHitAudio.play()
      };
    return this;
  }
};

module.exports = Game;