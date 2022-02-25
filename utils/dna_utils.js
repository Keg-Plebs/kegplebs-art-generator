const { specials, specialDnaSegments } = require('../input/config');

const batchList = {};
const traitCount = {};
const specialTraitDna = {};

const createUniqueDna = _layers => { // return only a 'dna' that is unique
    while(true) {
        const { dna, cantUse } = createDna(_layers)
        if(!cantUse && !batchList[dna]) {
            batchList[dna] = 1;
            return dna;
        }
    }
}

const lpad = (s, width, char) => {
    return (s.length >= width) ? s : (new Array(width).join(char) + s).slice(-width);
}

const createDna = _layers => {  // create any 'dna' regardless of uniqueness
    let currSpecialDNA;
    let cantUse = false;

    let dna = _layers.map(layer => {
        
        let dnaSegment;
        let sum = 0;
        for(let element of Object.values(layer.elements)) {
            sum+= element.rarity;
        }


        const rand = Math.random();
        let rnd = Math.floor(rand * sum);
        for(let element of Object.values(layer.elements)) {
            if(rnd < element.rarity) {
                dnaSegment = Object.values(layer.elements).indexOf(element);
                break;
            }
            rnd -= element.rarity;
        }

        if(layer.dir === 'HAT-HAIR' && specialDnaSegments[dnaSegment]) {
            currSpecialDNA = dnaSegment;
        }

        dnaSegment = lpad(dnaSegment, 3, 0)
        
        return dnaSegment;
    });

    if(currSpecialDNA) {
        if(specialTraitDna[currSpecialDNA]) {
            const similarDnas = specialTraitDna[currSpecialDNA]; // list of dnas that contain the 'special' dna segment

            for(let sim of similarDnas) { 
                if(sim[1] !== dna[1]) { // if body trait is not the same, check other traits
                    if( sim[0] === dna[0] && 
                        sim[2] === dna[2] &&
                        sim[3] === dna[3] &&
                        sim[5] === dna[5]

                        // dont have to check the 4th segment, as we know its the same 
                        // due to the sim dna being in the list already
                    ) cantUse = true;
                    break;
                }
            }
            
            if(!cantUse) specialTraitDna[currSpecialDNA].push(dna);
        } else {
            specialDnaSegments[currSpecialDNA] = [dna];
        }
    }
    
    
    return { dna, cantUse };
}

const obtainLayersFromDna = (_dna, _layers) => {
    const layerData = [];
    /**
     * If hair is 'special' - don't get the body trait we have currently set
     * - instead, return the data for the 'special' hair trait for both the 
     * hair and body
     */
    let isSpecial = false;


    for(let i = _layers.length-1; i >= 0; i--) {
        const element = Object.values(_layers[i].elements)[parseInt(_dna[i])];
        if(traitCount[element.filename]) traitCount[element.filename]++;
        else traitCount[element.filename] = 1;

        if(_layers[i].dir === "HAT-HAIR" && specials[element.filename]) {
            isSpecial = true;
        }

        if(isSpecial && _layers[i].dir === "BODY") {
            layerData.push({
                ...layerData[1],
                layer: _layers[i].dir,
            });
            continue;
        } else {
            layerData.push({
                position: _layers[i].position,
                size: _layers[i].size,
                ...element
            })
        }

    }
    
    //  _layers.map((layer, index) => {
    //     const element = Object.values(layer.elements)[_dna[index]];
        
    //     if(traitCount[element.filename]) traitCount[element.filename]++;
    //     else traitCount[element.filename] = 1;

    //     return {
    //         position: layer.position,
    //         size: layer.size,
    //         ...element
    //     }
    // })

    if(isSpecial) {
        layerData[0] = {
            ...layerData[0],
            path: `../modified/MOUTHS/${layerData[0].filename}`,
        }
    }

    return layerData.reverse();
}

const getTraitCount = (batchSize) => {
    const traitRatios = {};
    Object.entries(traitCount).forEach(([key, value]) => {
        traitRatios[key] = [value, (value / batchSize)];
    });


    return traitRatios;
}

module.exports = {
    createUniqueDna,
    obtainLayersFromDna,
    getTraitCount
}