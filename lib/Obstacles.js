const GameComponents = require('./GameComponents.js');
const Mushroom = require('./Mushroom.js');
const Spider = require('./Spider.js');

class Obstacles extends GameComponents {
  constructor(x, y, radius, color, dx, dy) {
    super(x, y, radius, color, dx, dy);
    this.mushrooms = [];
    this.spider = null;
    this.spiders = [];
    this.spiderStartingPositions = [];
  }

  generateRandomPosition() {
    return (Math.floor(Math.random() * 10) * canvas.width / 10) + this.radius + 20;
  }

  createMushroomsArray() {
    this.mushrooms = [];
    for (let i = 0; i < 50; i++) {
      let x = this.generateRandomPosition();
      let y = this.generateRandomPosition();
        let mushroom = new Mushroom (x, y, this.radius, '#BAEB79');
        this.mushrooms.push(mushroom);     
      };
  }

  addNewMushroomToArray(x, y) {
    let mushroom = new Mushroom(x, y, this.radius, '#BAEB79');
    this.mushrooms.push(mushroom); 
  }

  generateSpiderStartingsPositions() {
    this.spiderStartingPositions = []
    let y = 500;
    for (let i = 0; i < 30; i++) {
      y -= 10;
      this.spiderStartingPositions.push(y);
    };
    return this.spiderStartingPositions[Math.floor((Math.random() * 31))];
  }

  hatchSpider() {
    let startingPosition = this.generateSpiderStartingsPositions();
    const spider = new Spider (0, startingPosition, 5, '#003A5F', this.dx, this.dy);
    this.spider = spider;
    this.spiders.push(this.spider);
  }

  rehatchSpider() {
    if (this.spiders.length < 1) {
      this.hatchSpider();
    };
    return this;
  }

}

  module.exports = Obstacles;