const { ProvidePlugin } = require("webpack");
const { addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = function (config, env) {
  config = {
    ...config,
    module: {
      ...config.module,
      rules: [
        {
          test: /\.m?js$/,
          resolve: {
            fullySpecified: false,
          },
        },
        ...config.module.rules,
        {
          test: /\.(m?js|ts)$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
        {
          test: /\.js$/,
          exclude: (_) => !/node_modules\/(@web3auth|@ethereumjs)/.test(_),
          loader: 'babel-loader'
        }
      ],
    },
    plugins: [
      ...config.plugins,
      new ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      }),
    ],
    resolve: {
      ...config.resolve,
      fallback: {
        assert: require.resolve("assert"),
        buffer: require.resolve("buffer"),
        stream: require.resolve("stream-browserify"),
        http: require.resolve("stream-http"), // 添加这一行
        https: require.resolve("https-browserify"),
        zlib: require.resolve("browserify-zlib"),
        url: require.resolve("url"),
        assert: require.resolve("assert"),
        crypto: require.resolve("crypto-browserify")
      },
      alias: {
        '@web3auth/web3auth': '@web3auth/web3auth/dist/web3auth.umd.min.js'
      }
    },
    ignoreWarnings: [/Failed to parse source map/],
  };

  config = addWebpackAlias({
    '@': path.resolve(__dirname, 'src/')
  })(config);

  return config;
};