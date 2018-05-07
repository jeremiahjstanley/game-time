const GameComponents = require('./GameComponents.js');
const Mushroom = require('./Mushroom.js');
const Spider = require('./Spider.js');

class Obstacles extends GameComponents {
  constructor(x, y, radius, color) {
    super(x, y, radius, color);
    this.mushrooms = [];
    this.spider = null;
    this.spiders = [];
    this.spiderStartingPositions = [];
  };

  createMushroomArray() {
    this.mushrooms = [];
    for (let i = 0; i < 50; i++) {
      let x = (Math.floor(Math.random() * 10) * game.width / 10) + this.radius + 25;
      let y = (Math.floor(Math.random() * 10) * game.height / 10) + this.radius + 20;
        // if (i !== 0) {
        //   for (let j = 0; j < this.mushrooms.length; j++) {
        //     if (this.getDistance(x, y, this.mushrooms[j].x, this.mushrooms[j].y) - this.radius * 2 < 0) {
        //   } x = (Math.floor(Math.random() * 10) * game.width / 10) + this.radius + 25;
        //     y = (Math.floor(Math.random() * 10) * game.height / 10) + this.radius + 20;
        //     j = -1;
        //   };
        // }
        let mushroom = new Mushroom (x, y, this.radius, 'purple');
        this.mushrooms.push(mushroom);     
      }
  }

  addNewMushroom(x, y) {
    let mushroom = new Mushroom(x, y, this.radius, 'purple');
    this.mushrooms.push(mushroom) 
  }


 hatchSpider() {
    this.spiderStartingPositions = []
      let y = 500;
    for (let i = 0; i < 60; i++) {
        y -= 5;
      this.spiderStartingPositions.push(y)
    };
    let startingPosition = this.spiderStartingPositions[Math.floor((Math.random() * 7))];
    console.log(this.spiderStartingPositions)
    let dx = 5;
    let dy = 5;
    const spider = new Spider (0, startingPosition, 5, 'pink', dx, dy);
    this.spider = spider;
    this.spiders.push(this.spider);
    console.log(this.spiders)
  }

  rehatchSpider() {
    if (this.spiders.length < 1) {
      this.hatchSpider()
    }
    return this;
  }

  populateMushrooms(context) {
    this.mushrooms.forEach(mushroom => {
      mushroom.draw(context);
    })
  }
}

  module.exports = Obstacles;