const GameComponents = require('./GameComponents.js');

class Mushroom extends GameComponents {
  constructor(x, y, radius, color) {
    super(x, y, radius, color);
  }
}

module.exports = Mushroom;