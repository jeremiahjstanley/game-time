const GameComponents = require('./GameComponents.js');
const Mushroom = require('./Mushroom.js');
const Spider = require('./Spider.js');

class Obstacles extends GameComponents {
  constructor(x, y, radius, color) {
    super(x, y, radius, color);
    this.mushrooms = [];

  };

  createMushroomArray() {
    this.mushrooms = [];
    for (let i = 0; i < 50; i++) {
      let x = (Math.floor(Math.random() * 10) * game.width / 10) + this.radius;
      let y = (Math.floor(Math.random() * 10) * game.height / 10) + this.radius + 20;
        // if (i !== 0) {
        //   for (let j = 0; j < this.mushrooms.length; j++) {
        //     x = (Math.floor(Math.random() * 10) * game.width / 10) + this.radius;
        //     y = (Math.floor(Math.random() * 10) * game.height / 10) + this.radius + 10;

        //     j = -1;
        //   }
        // }
        let mushroom = new Mushroom(x, y, this.radius, 'purple' )
        this.mushrooms.push(mushroom)     
      }
      console.log(this.mushrooms);
  }



 hatchSpider() {
    // let dx = Math.floor((Math.random()) * 10);
    // let dy = Math.floor((Math.random()) * 10);
    let dx = 5;
    let dy = 5;
    const spider = new Spider (0, 300, 10, 'pink', dx, dy);
    this.spider = spider;
  }

  animateSpider(context) {
    this.spider.move()
    this.spider.draw(context);
   } 

  populateMushrooms(context) {
    this.mushrooms.forEach(mushroom => {
      mushroom.draw(context);
    })
  }
}

  module.exports = Obstacles;