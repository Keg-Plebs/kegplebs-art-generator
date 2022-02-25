const Stopwatch = require('timer-stopwatch');
const stopwatch = new Stopwatch();

const { init } = require("./utils/config_utils");
const { createUniqueDna, obtainLayersFromDna, getTraitCount } = require("./utils/dna_utils");
const { 
    saveImage, addMetaData, 
    writeMetaData, drawBase, 
    drawLayer, loadLayerImage,
    writeTraits 
} = require("./utils/index-utils");

const myArgs                        = process.argv.slice(2);
const batchSize = myArgs.length > 0 ? Number(myArgs[0]) : 1;

const createBatch = async() => {
    stopwatch.start();
    const layers = init();

    for(let curr = 0; curr < batchSize; curr++ ){
        const individualMetadata = [];
        const uniqueDna = createUniqueDna(layers);      // create a unique id 'DNA' to use during 'generation'

        const matchedLayers = obtainLayersFromDna(uniqueDna, layers);  // grab layers needed to draw image
        
        const loadedLayers = matchedLayers.map(layerElement => {
            return loadLayerImage(layerElement);
        });

        await Promise.all(loadedLayers).then(response => {

            drawBase();

            const elements = response.map(element => {
                drawLayer(element);
                return element.name;
            })

            saveImage(curr);
            individualMetadata.push(addMetaData(uniqueDna, curr, elements));
        })

        writeMetaData(individualMetadata[0]);
        if(curr % 100 === 0) console.log(curr);
    }
    
    writeTraits(getTraitCount(batchSize));
    stopwatch.stop();
    console.log((stopwatch.ms / 1000) / 60);
}

createBatch();
