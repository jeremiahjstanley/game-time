const Centipede = require('./Centipede.js');
const Shooter = require('./Shooter.js');
const GameComponents = require('./GameComponents.js');


const game = document.getElementById('game');
const shooter = new Shooter(350, 680, 10, 'red', 20, 20)
const centipede = new Centipede(0, 0);
const context = game.getContext('2d');

centipede.populateSegments();
document.addEventListener('keydown', shooterDirection);


function shooterDirection(event) {
  console.log(event.keyCode)
  switch (event.keyCode) {
      case 37: //left
        shooter.left();

      case 39: //right
        shooter.move('right');

      case 38:  //up
        shooter.move('up');

      case 40: //down
        shooter.move('down'); 
    }
}


function gameLoop() {
  context.clearRect(0, 0, game.width, game.height);
  shooter.draw(context).move(event);
  centipede.move().draw(context);
  requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);
