import Snake from '../gameobjects/Snake.js'
import Comida from '../gameobjects/Comida.js'
class Play extends Phaser.Scene {
	constructor() {
		super('Play');
	}

	preload() {
		console.log('Soy escena Play')
		//this.add.image(10, 10, 'tablero');
		this.snake = new Snake(this);
		this.comida = new Comida(this);
	}
	create() {
		this.input.keyboard.on('keydown-RIGHT', () => {
			this.snake.changeMov('derecha');
		});
		this.input.keyboard.on('keydown-LEFT', () => {
			this.snake.changeMov('izquierda');
		});
		this.input.keyboard.on('keydown-UP', () => {
			this.snake.changeMov('arriba');
		});
		this.input.keyboard.on('keydown-DOWN', () => {
			this.snake.changeMov('abajo');
		});

		// Colisiones de cabeza con comida
		this.physics.add.collider(this.snake.cuerpo[0], this.comida.comida, () => {
			this.comida.crearComida();
			this.snake.crece();
		})
	}
	update(time){
		this.snake.update(time);
	}
}

export default Play;