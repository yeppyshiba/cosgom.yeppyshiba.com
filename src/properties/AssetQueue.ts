export type AssetQueueType = {
    type: "image" | "audio" | "tilemapTiledJSON";
    key: string;
    url: string;
};
/*
    | {
          type: "spritesheet";
          key: string;
          url: string;
          frameConfig: Phaser.Types.Loader.FileTypes.ImageFrameConfig;
      }
    | {
          type: "bitmap-font";
          key: string;
          url: string;
          fontData: string;
      }
      */
/*
interface Pack {
    z: {
        files: AssetQueueType[];
    };
    meta: {
        game: string;
        author: string;
        URL: string;
    };
}
*/
