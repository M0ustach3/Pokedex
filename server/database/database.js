const pokemons = require('./pokedex.json')
const items = require('./items.json')
const moves = require('./moves.json')
const types = require('./types.json')
const item_mapping = require('./item-map.json');

module.exports.getPokemons = () => {
  pokemons.forEach((item, index) => {
    delete item.name.chinese;
  });
  return pokemons;
}
module.exports.getItems = () => {
  items.forEach((item, index) => {
    let modifiedId = "";
    if (item.id < 10) {
      modifiedId = "000" + item.id;
    } else if (item.id < 100) {
      modifiedId = "00" + item.id;
    } else if (item.id < 1000) {
      modifiedId = "0" + item.id;
    } else {
      modifiedId = "" + item.id;
    }
    modifiedId = "item_" + modifiedId;
    item.url = item_mapping[modifiedId] + '.png';
  });
  return items;
}
module.exports.getMoves = () => {
  return moves;
}
module.exports.getTypes = () => {
  return types;
}