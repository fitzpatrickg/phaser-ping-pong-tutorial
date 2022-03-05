import Phaser from 'phaser'
import { White } from '../consts/Colors'

export default class GameBackground extends Phaser.Scene {
  preload() {

  }

  create() {
    this.add.line(
      400, 250, 
      0, 0, 
      0, 500, 
      White, 1
    )

    this.add.circle(400, 250, 50).setStrokeStyle(2, White)
  }


}