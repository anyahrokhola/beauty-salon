const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (options) => {
  const data = { baseURL: options.WEBPACK_BUILD ? "/beauty-salon/dist/" : "/" };

  return {
    entry: {
      app: "./src/index.js",
    },

    output: {
      filename: "[name].js",
      path: __dirname + "/dist",
    },

    module: {
      rules: [
        {
          test: /\.(handlebars|hbs)$/,
          use: ["handlebars-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),

      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.hbs",
        templateParameters: data,
      }),
      new HtmlWebpackPlugin({
        filename: "about.html",
        template: "./src/pages/about/about.hbs",
        templateParameters: data,
      }),
      new HtmlWebpackPlugin({
        filename: "contacts.html",
        template: "./src/pages/contacts/contacts.hbs",
        templateParameters: data,
      }),
      new HtmlWebpackPlugin({
        filename: "services.html",
        template: "src/pages/services/services.hbs",
        templateParameters: data,
      }),
    ],
  };
};
