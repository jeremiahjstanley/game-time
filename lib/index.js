const Centipede = require('./Centipede.js');
const Shooter = require('./Shooter.js');
const GameComponents = require('./GameComponents.js');
const Obstacles = require('./Obstacles.js');
const Mushroom = require('./Mushroom.js')
const Bullet = require('./Bullet.js');

const game = document.getElementById('game');

// const bullet = new Bullet;
const shooter = new Shooter(350, 690, 10, 'red', 20, 20);
const centipede = new Centipede(0, 0);
const obstacles = new Obstacles(0, 0, 10, 'color');
const context = game.getContext('2d');

document.addEventListener('keydown', shooterAction);
centipede.populateSegments();
obstacles.createMushroomArray()
obstacles.hatchSpider();

function shooterAction(event) {
  switch (event.keyCode) {
      case 37: //left
        shooter.move('left');
        break;
      case 39: //right
        shooter.move('right');
        break;
      case 38:  //up
        shooter.move('up');
        break;
      case 40: //down
        shooter.move('down');
        break; 
      case 32: //space
        shooter.shoot(context);
        break;
    }
}


function gameLoop() {
  context.clearRect(0, 0, game.width, game.height);
  obstacles.populateMushrooms(context);
  centipede.move().draw(context);
  shooter.draw(context);
  // bullet.draw(context);
  requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);
