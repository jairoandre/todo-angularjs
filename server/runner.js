require('babel-register')({
  presets: ['es2015'],
  plugins: ['transform-object-rest-spread', 'transform-class-properties', 'transform-decorators-legacy']
});
require('./app.js');
