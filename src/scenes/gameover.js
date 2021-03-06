class Gameover extends Phaser.Scene {
	constructor() {
		super('Gameover');
	}

	preload(){
		console.log('Soy Gameover')

	}
	create(){
		this.scene.stop('UI');
		this.add.dynamicBitmapText(this.sys.game.config.width/2, this.sys.game.config.height/2 - 30, 'pixel', 'GAMEOVER', 20).setOrigin(0.5)
		

		this.evento = setTimeout(()=>{
			this.salirScene();
		}, 5000);

		this.input.keyboard.on('keydown_ENTER', ()=>{
			this.salirScene();
		})
		this.input.on('pointerdown', ()=>{
			this.salirScene();
		})
	
	}

	salirScene(){
		clearTimeout(this.evento);
		this.scene.start('Menu');
	}
}

export default Gameover;