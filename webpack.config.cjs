const path = require("path");

module.exports = {
  mode: "development", // or 'production'

  entry: "./src/main.jsx", // Entry point of your application

  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output filename
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(pdf)$/,
        type: "asset/resource", // This will treat PDF files as assets and copy them to the output directory
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"], // Enable importing jsx without specifying extension
  },
};
