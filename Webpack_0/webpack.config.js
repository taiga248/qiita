const path = require('path')

module.exports = {
  mode : 'development',
  entry : './src/app.js',
  output : {
    filename : 'bundle.js',
    path : path.join(__dirname, 'dist')
  },
  devServer: {
    port : 4040,
    open : true
  }
};
