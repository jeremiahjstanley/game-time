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

  createMushroomsArray() {
    this.mushrooms = [];
    for (let i = 0; i < 50; i++) {
      let x = (Math.floor(Math.random() * 10) * game.width / 10) + this.radius + 25;
      let y = (Math.floor(Math.random() * 10) * game.height / 10) + this.radius + 20;
        let mushroom = new Mushroom (x, y, this.radius, '#624F49');
        this.mushrooms.push(mushroom);     
      };
  }

  addNewMushroomToArray(x, y) {
    let mushroom = new Mushroom(x, y, this.radius, '#624F49');
    this.mushrooms.push(mushroom); 
  }


 hatchSpider() {
    this.spiderStartingPositions = []
    let y = 500;
    for (let i = 0; i < 30; i++) {
        y -= 10;
      this.spiderStartingPositions.push(y)
    };
    let startingPosition = this.spiderStartingPositions[Math.floor((Math.random() * 61))];
    const spider = new Spider (0, startingPosition, 5, '#2C6466', this.dx, this.dy);
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