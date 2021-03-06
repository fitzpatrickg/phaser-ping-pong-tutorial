import Phase from 'phaser'
import TitleScreen from './scenes/TitleScreen'
import Game from './scenes/Game'
import GameBackground from './scenes/GameBackground'
import * as SceneKeys from './consts/SceneKeys'

const config = {
  width: 800,
  height: 500,
  type: Phaser.AUTO, // phaser decides if we use webGL if supported, otherwise canvas,
  physics: {
    default: 'arcade',
    arcade: { 
      gravity: { y: 0 },
      debug: true 
    }
  }
}

const game = new Phase.Game(config)

game.scene.add(SceneKeys.TitleScreen, TitleScreen)
game.scene.add(SceneKeys.Game, Game)
game.scene.add(SceneKeys.GameBackground, GameBackground)
game.scene.start(SceneKeys.TitleScreen)
