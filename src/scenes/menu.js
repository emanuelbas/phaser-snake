class Menu extends Phaser.Scene {
	constructor() {
		super('Menu');
	}

	preload(){
		console.log('Soy Menu')
	}

	create(){
		this.add.image(this.sys.game.config.width/2,this.sys.game.config.height/2-50, 'comida').setScale(6);
		this.add.dynamicBitmapText(this.sys.game.config.width/2,this.sys.game.config.height/2, 'pixel', 'PHASER SNAKE', 18)
		.setOrigin(0.5)

		const boton_comenzar = this.add.dynamicBitmapText(this.sys.game.config.width/2,this.sys.game.config.height - 40, 'pixel', 'INSERT COIN', 8)
		.setOrigin(0.5) 

		this.tweens.add({
			targets: boton_comenzar,
			ease: (x) => x < 0.5 ? 0 : 1,
			alpha: 0,
			duration: 500,
			yoyo: true,
			repeat: -1
		})


		this.input.keyboard.on('keydown-RIGHT', () => {
			this.scene.start('Play');
		});
		this.input.keyboard.on('keydown-LEFT', () => {
			this.scene.start('Play');
		});
		this.input.keyboard.on('keydown-UP', () => {
			this.scene.start('Play');
		});
		this.input.keyboard.on('keydown-DOWN', () => {
			this.scene.start('Play');
		});
		this.input.keyboard.on('keydown_ENTER', ()=>{
			this.scene.start('Play');
		})
		this.input.on('pointerdown', ()=>{
			this.scene.start('Play');
		})

	}
}

export default Menu;