// const { config } = require('json5-loader!./config.json5');
var config = require('./config.json5');
function hello(name) {
  return `${config.message} ${name}`;
}
export { hello };
