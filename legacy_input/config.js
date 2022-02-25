const width = 1000;
const height = 1000;

const baseURIHost = "ipfs://_____";

// NOT FINAL
const rarity = {
};

const layers = [
    {   
        dir: "Background",
        id: 1,
        position: { //will change
            x: 100,
            y: 200
        },
        size: { 
            width: width - 200, 
            height: height - 400
        },
        elements: {}
    },
    {   
        dir: "Body",
        id: 2,
        position: { //will change
            x: 110,
            y: 130
        },
        size: { 
            width: width - 200,
            height: height - 200
        },
        elements: {}
    },
    {   
        dir: "Glass",
        id: 3,
        position: { //will change
            x: 100,
            y: 50
        },
        size: { 
            width: width - 200,
            height: height - 200
        },
        elements: {}
    },
    {   
        dir: "Beer",
        id: 4,
        position: { //will change
            x: 100,
            y: 50
        },
        size: { 
            width: width - 200,
            height: height - 200
        },
        elements: {}
    },
    {   
        dir: "Bubbles",
        id: 5,
        position: { //will change
            x: 100,
            y: 50
        },
        size: { 
            width: width - 200,
            height: height - 200
        },
        elements: {}
    },
    {   
        dir: "Head",
        id: 6,
        position: { //will change
            x: 100,
            y: 50
        },
        size: { 
            width: width - 200,
            height: height - 200
        },
        elements: {}
    },
    {   
        dir: "Mouth",
        id: 7,
        position: { //will change
            x: 100,
            y: 50
        },
        size: { 
            width: width - 200,
            height: height - 200
        },
        elements: {}
    },
    {   
        dir: "Eyes",
        id: 8,
        position: { //will change
            x: 100,
            y: 50
        },
        size: { 
            width: width - 200,
            height: height - 200
        },
        elements: {}
    },
    {   
        dir: "Foam",
        id: 9,
        position: { //will change
            x: 100,
            y: 50
        },
        size: { 
            width: width - 200,
            height: height - 200
        },
        elements: {}
    }
];

module.exports = {
    width,
    height,
    layers,
    rarity,
    baseURIHost
}