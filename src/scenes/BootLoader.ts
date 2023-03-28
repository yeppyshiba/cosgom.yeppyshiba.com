import Scene from "@/enums/Scene";

/**
 * Boot loader is the initial scene to load any assets used during the preloader
 */
export default class BootLoader extends Phaser.Scene {
    constructor() {
        super(Scene.BOOT_LOADER);
    }

    /**
     * Loads the logo image to display on the preloading scene
     */
    public preload(): void {
        //this.load.image("logo", `${Bootloader.ASSET_DIRECTORY}/images/logo.png`);
    }

    /**
     * When the logo image has finished loading it starts the preloader scene.
     */
    public create(): void {
        this.scene.start(Scene.ASSET_LOADER);
    }
}
