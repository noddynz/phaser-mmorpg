/*jshint esversion: 6 */
class Player extends Phaser.Physics.Arcade.Image {
	constructor(scene, x, y, key, frame) {
		super(scene, x, y, key, frame);
		this.scene = scene; // the scene this container will be added

		// enable physics
		this.scene.physics.world.enable(this);
		// set immovable if another object collides with our player
		this.setImmovable(true);
		// scale our player
		this.setScale(2);
		// add the player to existing scene
		this.scene.add.existing(this);
	}
}
