const GameComponents = require('./GameComponents.js');
const Mushroom = require('./Mushroom.js');
const Spider = require('./Spider.js');

class Obstacles extends GameComponents {
  constructor(x, y, radius, color) {
    super(x, y, radius, color);
    this.mushrooms;

  };

  createMushroomArray() {
      this.mushrooms = [];
    for (let i = 0; i < 50; i++) {
      let x = (Math.floor(Math.random() * 10) * game.width / 10) + this.radius;
      let y = (Math.floor(Math.random() * 10) * game.height / 10) + this.radius;
      let mushroom = new Mushroom(x, y, this.radius, 'purple' );
      this.mushrooms.push(mushroom)
      console.log(this.mushrooms);
    }
  }

  hatchSpider() {
    const spider = new Spider(350, 350, this.radius, 'blue')
  }

  populateMushrooms(context) {
    this.mushrooms.forEach(mushroom => {
      mushroom.draw(context);
    })
  }
}

  module.exports = Obstacles;