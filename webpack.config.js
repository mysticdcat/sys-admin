var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const proxy = require("./src/proxy/proxy.js");
function resolve(dir) {
  return path.join(__dirname, "./", dir);
}

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "build.js",
    chunkFilename: "chunks/[name]-[chunkhash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          /* name: '/static/imgs/[name].[ext]?[hash]' */
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader",
        options: {
          /* name: '/static/fonts/[name].[ext]?[hash]' */
        }
      },
      {
        test: /\.sass$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "./", "src")
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./favicon.ico",
      template: "./index.html",

      //filename:"a.html" 默认index.html
      minify: {
        removeAttributeQuotes: true, //去除引号
        removeComments: true, //去除注释
        removeEmptyAttributes: true, //去除空属性
        collapseWhitespace: true //除去空格
      }
    })
  ],
  devServer: {
    /* contentBase: path.resolve(__dirname, "./dist"), */
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    port: 8085,
    proxy: proxy
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map"
};

if (process.env.NODE_ENV === "production") {
  module.exports.devtool = "#source-map";
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
