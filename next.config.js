const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const getLocalIdent = require('css-loader/lib/getLocalIdent');
module.exports = {
  ...withImages(),
  ...withCSS({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
      getLocalIdent: (context, localIdentName, localName, options) => {
        if (context.context.includes('node_module')) {
          return localName;
        }
        return getLocalIdent(context, localIdentName, localName, options);
      },
    },
    webpack: function (config) {
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {

          }
        }
      })
      return config
    }
  })
};

