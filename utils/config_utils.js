const fs            = require('fs');
const { layers, rarity }    = require('../input/config');

// should return the the rarity applied to each attribute
const applyRarity = str => {
    const elementRarity = rarity[str] || 1;

    return elementRarity;
}

// should return the filename without the .png
const convertPathToName = str => {
    let name = str.slice(0, -4);
    Object.keys(rarity).forEach(key => {
        return name.replace(key, "");
    });
    return name;
}

const getLayerElements = (_path) => {
    const elements = fs 
        .readdirSync(`${__dirname}/../input/${_path}`)
        // .filter( item => !/(^|\/)\.[^\/\.]/g.test(item) //for macs?
        .map( (name, index) => {


            return {
                id: index,
                name: convertPathToName(name),
                filename: name,
                rarity: applyRarity(name),
                path: `${_path}/${name}`,
                layer: _path
            }
        })

    return elements;
}

const init = () => {
    for(let layer of layers) {
        const elementsList = getLayerElements(layer.dir);
        for(const element of elementsList) {
            layer.elements[element.name] = element;
        }
    }

    return layers;
}

module.exports = {
    init
}