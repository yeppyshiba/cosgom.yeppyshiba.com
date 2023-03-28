import "phaser";
import MergedInput from "phaser3-merged-input";
import AssetLoader from "@/scenes/AssetLoader";
import BootLoader from "@/scenes/BootLoader";
import MainScene from "@/scenes/MainScene";

class Game extends Phaser.Game {
    constructor() {
        super(<Phaser.Types.Core.GameConfig>{
            width: GAME_WIDTH,
            height: GAME_HEIGHT,
            type: Phaser.AUTO,
            parent: "content",
            physics: {
                default: "arcade",
            },
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
            },
            /*
            pipeline: {
                PicoCRT
            } as any,
            */
            scene: [BootLoader, AssetLoader, MainScene],
            plugins: {
                scene: [
                    {
                        key: "mergedInput",
                        plugin: MergedInput,
                        mapping: "mergedInput",
                    },
                ],
            },
        });
    }
}

new Game();
