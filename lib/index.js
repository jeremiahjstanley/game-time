const Game = require('./Game.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game(context)


document.addEventListener('keydown', shooterAction);
game.initialize();

function shooterAction(event) {
  switch (event.keyCode) {
      case 37: //left
        game.shooter.move('left');
        break;
      case 39: //right
        game.shooter.move('right');
        break;
      case 38:  //up
        game.shooter.move('up');
        break;
      case 40: //down
        game.shooter.move('down');
        break; 
      case 32: //space
        game.shooter.shoot();
        break;
    }
}


function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  game.procedure();
  requestAnimationFrame(gameLoop);
}


window.requestAnimationFrame(gameLoop);
