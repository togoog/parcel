const JSAsset = require('./JSAsset');
const config = require('../utils/config');
const localRequire = require('../utils/localRequire');

class CoffeeScriptAsset extends JSAsset {
  async parse(code) {
    // require coffeescript, installed locally in the app
    let coffee = localRequire('coffeescript', this.name);

    // Transpile Module using CoffeeScript and parse result as ast format through babylon
    this.contents = coffee.compile(code, {});
    return await super.parse(this.contents);
  }
}

module.exports = CoffeeScriptAsset;
