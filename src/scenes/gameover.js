class Gameover extends Phaser.Scene {
	constructor() {
		super('Gameover');
	}

	preload(){
		console.log('Soy Gameover')
		alert("Se acabó")

	}
}

export default Gameover;