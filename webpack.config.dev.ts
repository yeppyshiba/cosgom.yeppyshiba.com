import path from "path";
import { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import PhaserAssetsWebpackPlugin from "phaser-assets-webpack-plugin";

export default <Configuration>{
    entry: {
        app: "./src/app.ts",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "@": path.resolve(__dirname, "src/"),
        },
    },
    stats: "errors-warnings",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "./",
        chunkFilename: "[id].js",
    },
    devtool: "source-map",
    plugins: [
        new DefinePlugin({
            GAME_WIDTH: 640,
            GAME_HEIGHT: 360,
        }),
        new PhaserAssetsWebpackPlugin({
            patterns: [
                { type: "audio", prefix: "audio-", dir: "/audio", rule: /^\w+\.(m4a|ogg)$/ },
                { type: "json", prefix: "map-", dir: "/map", rule: /^\w+\.(json)$/ },
                { type: "image", prefix: "sprite-", dir: "/sprite", rule: /^\w+\.png$/ },
            ],
            documentRoot: "./assets",
            output: "./src/assets.json",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./assets",
                    to: "./assets",
                    force: true,
                },
            ],
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./template.html",
            minify: {
                collapseWhitespace: true,
            },
        }),
    ],
    optimization: {
        minimize: false,
    },
    devServer: {
        open: true,
        hot: true,
        devMiddleware: {
            publicPath: "/",
        },
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
    },
};
