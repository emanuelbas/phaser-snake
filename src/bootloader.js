class Bootloader extends Phaser.Scene {
	constructor() {
		super('Bootloader');
	}

	preload(){
		console.log('Soy Bootloader');
		this.scene.start('Play');
		this.load.image('cuerpo', './assets/body.png');
		this.load.image('comida', './assets/food.png');
		this.load.image('tablero', './assets/tablero.png');

		this.load.on('complete', ()=> {this.scene.start('Play')})
	}

	create() {
		
	}
}

export default Bootloader;