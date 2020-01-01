const path = require("path"); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  entry: "./client/src/index.tsx",
  output: {
    path: path.resolve(__dirname, "client/static/client"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};
