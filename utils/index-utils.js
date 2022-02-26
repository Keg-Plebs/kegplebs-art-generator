const { specials } = require('../input/config')

const { loadImage, createCanvas }   = require("canvas");
const fs                            = require("fs");
const { 
    width, 
    height, 
    desc, 
    baseURIHost }                   = require("../input/config");

const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

// draw methods
const drawBase = async () => {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width+200, height+500);
}

const drawLayer = async (_element) => {
    if(_element.layer === 'BODY' && specials[_element.filename]) {
        return;
    } 

    ctx.drawImage(
        _element.image, 
        _element.position.x, 
        _element.position.y, 
        _element.size.width, 
        _element.size.height
    );
};

// write methods
const saveImage = (_nftNum) => {
    fs.writeFileSync(`./output/images/${_nftNum}.png`, canvas.toBuffer("image/png"));
};

const writeMetaData = (_metadata) => {
    fs.writeFileSync(`./output/json/${_metadata["mint"]}.json`, JSON.stringify(_metadata));
}


const writeJsonData = (traitsList, name) => {
    fs.writeFileSync(`./output/json/${name}.json`, JSON.stringify(traitsList));
}

const addMetaData = (_dna, _mint, _attributes) => {
    return {
        dna: _dna.join(""),
        name: `#${_mint}`,
        description: desc,
        image: `./${baseURIHost}/${_mint}.png`,
        mint: _mint,
        date: Date.now(),
        attributes: _attributes
    };
};

const loadLayerImage = async(_element) => {
    return new Promise(async(resolve) => {
        const image = await loadImage(`${__dirname}/../input/${_element.path}`)
        resolve({ image, ..._element });
    })
}

module.exports = {
    saveImage,
    drawLayer,
    drawBase,
    loadLayerImage,
    writeMetaData,
    addMetaData,
    writeJsonData
}