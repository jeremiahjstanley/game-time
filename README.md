# Centipede

A recreation of the 1981 Atari "Centipede" game using HTML Canvas with a focus on OOP. Additionally, it was our first project built with ES6 and TDD. The project spanned a period of one week. Objects in the game are created using Class constructor files, and each class should have its own testing file to verify functionality.

The objective of the game is to progess through levels by eliminating all segments of a centipede. Points are accrued on destruction of a centipede segment, eliminating a spider object, and completing a level. Lives are lost when a centipede segment or a spider makes contact with the player. The game ends when all lives are used. Game makes use of a high score feature.

## Tools and Technologies

* HTML5 Canvas
* ES6
* Mocha/Chai


## Screenshot
<img src="https://github.com/jeremiahjstanley/game-time/blob/master/images/centipede.png" />

## Set Up
### Front-end

```
git clone https://github.com/jeremiahjstanley/game-time
```

```
cd game-time
```

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `[localhost:8080](https://www.localhost:8080)` to run your application


To build the static files:

```js
npm build
```

## Test Driven Development

Centipede uses Mocha and Chai for testing

To run tests in Node from the root directory:

```js
npm test
```

## Original Assignment

[GameTime Assignment](http://frontend.turing.io/projects/game-time.html) from the Turing School of Software & Design

## Next Steps

* Modify velocity as levels increment to add increasing difficulty
* Add a second "spider" to higher levels

## Contributors

* [Jeremiah Stanley](https://github.com/jeremiahjstanley)
* [Marika Ross](https://github.com/marikaross)

