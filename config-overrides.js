/* config-overrides.js */

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  console.log(config);
  /*
{
   test: /\.mp3$/,
   loader: 'file',
   query: {
      name: 'static/media/[name].[hash:8].[ext]'
   }
}
    */
  return config;
};
