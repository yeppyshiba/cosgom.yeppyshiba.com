import Scene from "@/enums/Scene";
import assets from "@/objects/assets.json";

export default class AssetLoader extends Phaser.Scene {
    constructor() {
        super(Scene.ASSET_LOADER);
    }

    public preload(): void {
        const width = 320;
        const height = 50;

        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect((GAME_WIDTH - width) / 2, (GAME_HEIGHT - height) / 2, width, height); // x,y, width, height: ;

        const progressBar = this.add.graphics();

        this.load.on("progress", (value: number) => {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(
                (GAME_WIDTH - width) / 2 + 10,
                (GAME_HEIGHT - height) / 2 + 10,
                (width - 20) * value,
                height - 20,
            );
        });

        this.load.on("complete", () => {
            this.scene.start(Scene.MAIN_SCENE);
        });

        Object.keys(assets).forEach((methodName: string) => {
            const entries = assets[methodName as keyof typeof assets] as [string, string][];
            entries.forEach((args: [string, string]) => {
                this.load[methodName as keyof typeof assets](...args);
            });
        });
    }
}
