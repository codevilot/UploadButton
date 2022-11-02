import { resolve } from "node:path";
const commonConfig = {
  target: "browserslist",
  entry: {
    main: resolve("src/main.jsx"),
  },
  output: {
    path: resolve("public"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm"],
  },

  module: {
    rules: [
      // ...
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
      },
    ],
  },
};

export default commonConfig;
