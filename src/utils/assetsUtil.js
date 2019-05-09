/**
 * Created by anna on 17.4.2019.
 */

let images = [];

for (let i = 1; i < 722; i++) {
  images.push({index: i, src: require('../assets/images/pokemons/' + i + '.png')});
}

const defaultImage = require('../assets/images/pokeball.png');

const assets = {
  images: images,
  default: defaultImage,
};

export default assets;