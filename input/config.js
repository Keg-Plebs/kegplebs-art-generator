const width = 1000;
const height = 1000;

const baseURIHost = "ipfs://_____";

// NOT FINAL
const rarity = {
    "__0195_Brown-Transit-.png" : 130,
    "__0196_Green-Transit.png" : 270,
    "__0197_Beige-Crew.png" : 130,
    "__0198_Grey-Crew.png" : 240,
    "__0199_Orange-Crew-.png" : 220,
    "__0200_Red-Crew.png" : 170,
    "__0201_Blue-Tie-Dye.png" : 230,
    "__0202_Grey-Hang-Loose-Crew.png" : 200,
    "__0203_Blue-Hang-Loose-Crew.png" : 190,
    "__0204_Purple-Tie-Dye-Hang-Loose-Crew.png" : 25,
    "__0205_Maroon-Tie-Dye-Hang-Loose-Crew.png" : 25,
    "__0206_Mountain-Bike-Jersey.png" : 220,
    "__0207_Western.png" : 90,
    "__0208_Purple-Puffer.png" : 20,
    "__0209_Orange-Puffer.png" : 100,
    "__0211_Blue-Puffer.png" : 300,
    "__0212_Ozine-PLeb.png" : 110,
    "__0213_Rock-N-Roll.png" : 110,
    "__0214_Party-Time.png" : 50,
    "__0215_Lab-Coat.png" : 250,
    "__0216_Wet-Suit.png" : 100,
    "__0217_Cutoff.png" : 240,
    "__0218_Joint-Hoodie.png" : 150,
    "__0219_Blanket-Blue.png" : 110,
    "__0220_Blanket-Beige.png" : 330,
    "__0221_Cropped-Hoodie.png" : 100,
    "__0222_Hoodie-Black.png" : 77,
    "__0223_Hoodie-Red.png" : 77,
    "__0224_Hoodie-Green.png" : 77,
    "__0225_Hoodie-Purple.png" : 77,
    "__0226_Hoodie-Teal.png" : 400,
    "__0227_Allstar.png" : 60,
    "__0228_Fur-Jacket-Scarf.png" : 100,
    "__0229_Fur-Jacket.png" : 300,
    "__0230_Sweater-Weather.png" : 260,
    "__0231_Crew-Sweater-White.png" : 100,
    "__0232_Poncho.png" : 340,
    "__0233_Baja-Hoodie.png" : 220,
    "__0234_peace.png" : 0,
    "__0235_Crew-Sweater.png" : 350,
    "__0236_Hippy-Vest.png" : 60,
    "__0237_Sunflower-Overalls.png" : 90,
    "__0239_Astronaut.png" : 10,
    "__0240_Beer-Suit.png" : 40,
    "__0241_Cigar-Suit-Eth.png" : 3,
    "__0242_Cigar-Suit-Eth.png" : 10,
    "__0243_Synchilla-Teal.png" : 300,
    "__0244_Synchilla-White.png" : 222,
    "__0245_Flannel-Red.png" : 220,
    "__0246_Flannel-Purple.png" : 270,
    "__0247_Floral-Brown-Weather.png" : 100,
    "__0248_Floral-Black-Leather.png" : 50,
    "__0249_Leather-Jacket.png" : 310,
    "__0250_Hawaiian-Red.png" : 400,
    "__0251_Hawaiian-Maroon.png" : 50,
    "__0252_Hawaiian-Blue.png" : 300,
    "__0253_Running-Tee.png" : 80,
    "__0254_Teal-Basic-Tee.png" : 0,
    "__0255_Basic-Tee.png" : 300,
    "__0256_Purple-Tie-Dye-Tee.png" : 0,
    "__0257_Blue-Tie-Dye-Tee.png" : 0,
    "__0258_Green-Tie-Dye-Tee.png" : 0,
    "__0030_Pink-Locs.png" : 90,
    "__0031_Red-Locs.png" : 120,
    "__0032_Green-Locs-copy.png" : 150,
    "__0033_Purple-Towel-Wrap.png" : 40,
    "__0034_Blue-Towel-Wrap.png" : 85,
    "__0035_White-Towel-Wrap.png" : 200,
    "__0036_Orange-Towel-Wrap.png" : 0,
    "__0037_Red-Bomber.png" : 40,
    "__0038_Brown-Bomber.png" : 190,
    "__0039_Yellow-Hard-Hat.png" : 150,
    "__0040_Blue-Hard-Hat.png" : 40,
    "__0041_Red-Floral-Sun-Hat.png" : 100,
    "__0042_Green-Floral-Sun-Hat.png" : 180,
    "__0043_Purple-Sun-Hat.png" : 60,
    "__0044_Brown-Beret.png" : 20,
    "__0045_Green-Beret.png" : 80,
    "__0046_Red-Beret.png" : 180,
    "__0047_Purple-Bangs.png" : 100,
    "__0048_Blue-Bangs.png" : 120,
    "__0049_Pink-Bangs.png" : 160,
    "__0050_Red-Bangs.png" : 50,
    "__0051_Purple-Bowl-Cut.png" : 50,
    "__0052_Black-Bowl-Cut.png" : 120,
    "__0053_Purple-Pigtail.png" : 30,
    "__0054_Pink-Pigtail.png" : 75,
    "__0055_Blue-Pigtail.png" : 120,
    "__0056_Blue-Bucket.png" : 10,
    "__0057_Beige-Bucket.png" : 180,
    "__0058_Mossy-Bucket.png" : 50,
    "__0059_Yellow-Bucket.png" : 20,
    "__0060_Red-Bucket.png" : 70,
    "__0061_Purple-Fedora.png" : 5,
    "__0062_Grey-Fedora.png" : 50,
    "__0063_Welders-Cap.png" : 43,
    "__0064_Brown-River-Hat.png" : 100,
    "__0065_Beige-River-Hat.png" : 230,
    "__0066_Red-Backwards-Cap.png" : 40,
    "__0067_Blue-Backwards-Cap-.png" : 100,
    "__0068_Purple-Backwards-Cap.png" : 25,
    "__0069_Black-Backwards-Cap.png" : 50,
    "__0070_Black-Vintage-Cap.png" : 60,
    "__0071_Blue-Vintage-Cap.png" : 100,
    "__0072_Green-Vintage-Cap.png" : 35,
    "__0073_Gold-Floral-Headband.png" : 25,
    "__0074_Daisy-Headband.png" : 140,
    "__0075_Crown.png" : 55,
    "__0076_Forest-Bike-Helmet.png" : 90,
    "__0077_Orange-Bike-Helmet.png" : 50,
    "__0078_Beige-Bike-Helmet.png" : 150,
    "__0079_Rain-Coat.png" : 20,
    "__0080_Blue-Alpine-Suit.png" : 44,
    "__0081_Red-Alpine-Suit.png" : 90,
    "__0082_Yellow-Alpine-Suit.png" : 150,
    "__0083_Slate-Rain-Jacket.png" : 30,
    "__0084_Green-Rain-Jacket.png" : 90,
    "__0085_Teal-Rain-Jacket.png" : 100,
    "__0086_Orange-Rain-Jacket.png" : 150,
    "__0087_Red-Rain-Jacket.png" : 240,
    "__0088_Gold-Dragon.png" : 2,
    "__0089_Purple-Dragon.png" : 3,
    "__0090_Green-Dragon.png" : 5,
    "__0091_Unicorn.png" : 3,
    "__0092_Panther.png" : 4,
    "__0093_Blue-Kitty.png" : 3,
    "__0094_Tiger.png" : 6,
    "__0095_Black-Hoodie.png" : 240,
    "__0096_Mossy-Hoodie.png" : 33,
    "__0097_Blue-Hoodie.png" : 95,
    "__0098_Purple-Hoodie.png" : 100,
    "__0099_Beige-Hoodie.png" : 25,
    "__0100_Blue-Beanie.png" : 90,
    "__0101_Orange-Beanie.png" : 40,
    "__0102_Beige-Beanie.png" : 220,
    "__0103_Blue-Striped-Wooly-Hat.png" : 35,
    "__0104_Beige-Striped-Wooly-Hat.png" : 60,
    "__0105_Purple-Wooly-Hat.png" : 120,
    "__0106_Green-Wooly-Hat.png" : 170,
    "__0107_Purple-Sweat-Band.png" : 50,
    "__0108_Teal-Sweat-Band.png" : 35,
    "__0109_White-Sweat-Band.png" : 150,
    "__0110_Purple-Durag.png" : 10,
    "__0111_Red-Durag.png" : 60,
    "__0112_Blue-Durag.png" : 60,
    "__0113_Black-Durag.png" : 160,
    "__0114_Slicked-Hair.png" : 35,
    "__0115_Static-Hair.png" : 20,
    "__0116_Blue-Trucker-Cap.png" : 90,
    "__0117_Beige-Trucker-Cap.png" : 35,
    "__0118_Red-Trucker-Cap.png" : 120,
    "__0119_Green-Trucker-Cap.png" : 50,
    "__0120_Blue-Cycling-Cap.png" : 30,
    "__0121_Orange-Cycling-Cap.png" : 20,
    "__0122_Green-Cycling-Cap.png" : 80,
    "__0123_Grey-Flat-Brim.png" : 150,
    "__0124_Orange-Flat-Brim.png" : 30,
    "__0125_Blurple-Flat-Brim.png" : 100,
    "__0126_Green-Flat-Brim.png" : 60,
    "__0127_Red-Bun.png" : 30,
    "__0128_Purple-Bun.png" : 80,
    "__0129_Brown-Bun.png" : 190,
    "__0130_Beach-Bum.png" : 80,
    "__0131_Pink-Long-Hair.png" : 190,
    "__0132_Blue-Long-Hair.png" : 120,
    "__0133_White-Long-Hair.png" : 75,
    "__0134_Beer-Foam.png" : 50,
    "__0135_Brown-Afro.png" : 110,
    "__0136_Black-Afro.png" : 250,
    "__0137_Brown-Mullet.png" : 150,
    "__0138_Black-Mullet.png" : 85,
    "__0139_Pink-Mullet.png" : 40,
    "__0140_Blue-Headphones.png" : 70,
    "__0141_Gold-Headphones.png" : 10,
    "__0142_Green-Headphones.png" : 30,
    "__0143_Red-Headphones.png" : 120,
    "__0144_Purple-Headphones.png" : 50,
    "__0145_Premium-Headphones.png" : 250,
    "__0146_Pink-Visor.png" : 59,
    "__0147_Acid-Visor.png" : 50,
    "__0148_White-Visor.png" : 150,
    "__0149_Lucky-Visor.png" : 10,
    "__0150_Danglers.png" : 100,
    "__0151_Go-Fast-Eyes.png" : 200,
    "__0152_Lab-Goggles.png" : 140,
    "__0153_Lover-Eyes.png" : 190,
    "__0154_Tweaked.png" : 300,
    "__0155_Pleb-Gaze.png" : 260,
    "__0156_Red-Glowing.png" : 100,
    "__0157_Yellow-Glowing-.png" : 20,
    "__0158_Blue-Glowing.png" : 10,
    "__0159_Empty-.png" : 330,
    "__0160_Hypnotized.png" : 220,
    "__0161_Stare.png" : 210,
    "__0162_Eyepatch.png" : 90,
    "__0163_Circular-Glass.png" : 190,
    "__0164_One-Too-Many.png" : 450,
    "__0165_Lashes.png" : 400,
    "__0166_Sun-Vision.png" : 200,
    "__0167_Unimpressed.png" : 470,
    "__0168_XX.png" : 450,
    "__0169_Wise-Eyes.png" : 400,
    "__0170_Highs.png" : 200,
    "__0171_Sleepy.png" : 660,
    "__0172_Passed-out.png" : 550,
    "__0173_Philosopher.png" : 200,
    "__0174_Cross-Eyed.png" : 550,
    "__0175_Swimming-With-the-Fishies.png" : 100,
    "__0176_Ski-Goggles.png" : 200,
    "__0177_Indoubiously-.png" : 490,
    "__0178_Blue-Party-Glasses.png" : 50,
    "__0179_Red-Party-Glasses.png" : 100,
    "__0180_Blue-Reading-Glasses.png" : 100,
    "__0181_Teal-Reading-Glasses.png" : 400,
    "__0182_Pink-Reading-Glasses.png" : 250,
    "__0183_Pink-Polarized-Sunnies-copy.png" : 300,
    "__0184_Blue-Polarized-Sunnies.png" : 200,
    "__0185_Turtle-Shell-Glasses.png" : 400,
    "__0186_3D-Glasses-copy.png" : 30,
    "__0187_3D-Glasses.png" : 100,
    "__0188_Blue-Hole-Cobra.png" : 0,
    "__0189_Pink-Hole-Cobra.png" : 0,
    "__0190_Orange-Hole-Cobra.png" : 0,
    "__0000_Orange-Moustache.png" : 63,
    "__0001_White-Moustache.png" : 21,
    "__0002_Black-Moustache.png" : 111,
    "__0003_Black-Long-Beard.png" : 51,
    "__0004_Black-Short-Beard.png" : 77,
    "__0005_Happy.png" : 750,
    "__0006_Big-Smile-.png" : 770,
    "__0007_Barf.png" : 53,
    "__0008_Blue-Bandana.png" : 50,
    "__0009_Purple-Bandana.png" : 400,
    "__0011_Green-Bandana.png" : 550,
    "__0012_Goober.png" : 750,
    "__0013_Stoke.png" : 440,
    "__0014_Bit-Tongue.png" : 398,
    "__0015_Whistle.png" : 575,
    "__0016_Smiley.png" : 725,
    "__0017_Bit-Lip.png" : 590,
    "__0018_Hold-Breath.png" : 333,
    "__0019_Blow-Bubbles.png" : 575,
    "__0020_Deep-Breath.png" : 440,
    "__0021_Roar.png" : 390,
    "__0022_Smucker.png" : 569,
    "__0023_Hungry.png" : 675,
    "__0024_Thirsty.png" : 600,
};

const specials = {
    "__0099_Beige-Hoodie.png" : 69,
    "__0098_Purple-Hoodie.png" : 68,
    "__0097_Blue-Hoodie.png" : 67,
    "__0095_Black-Hoodie.png" : 65,
    "__0096_Mossy-Hoodie.png" : 66,
    "__0094_Tiger.png" : 64,
    "__0093_Blue-Kitty.png" : 63,
    "__0092_Panther.png" : 62,
    "__0091_Unicorn.png" : 61,
    "__0090_Green-Dragon.png" : 60,
    "__0089_Purple-Dragon.png" : 59,
    "__0088_Gold-Dragon.png" : 58,
    "__0087_Red-Rain-Jacket.png" : 57,
    "__0085_Teal-Rain-Jacket.png" : 55,
    "__0086_Orange-Rain-Jacket.png" : 56,
    "__0084_Green-Rain-Jacket.png" : 54,
    "__0083_Slate-Rain-Jacket.png" : 53,
    "__0082_Yellow-Alpine-Suit.png" : 52,
    "__0081_Red-Alpine-Suit.png" : 51,
    "__0080_Blue-Alpine-Suit.png" : 50,
    "__0079_Rain-Coat.png" : 49,
}

const specialDnaSegments = {
    '069' : 1,
    '068' : 1,
    '067' : 1,
    '066' : 1,
    '065' : 1,
    '064' : 1,
    '063' : 1,
    '062' : 1,
    '061' : 1,
    '060' : 1,
    '059' : 1,
    '058' : 1,
    '057' : 1,
    '056' : 1,
    '055' : 1,
    '054' : 1,
    '053' : 1,
    '052' : 1,
    '051' : 1,
    '050' : 1,
    '049' : 1,
}

/**
 * specials cover the body layer
 */

const layers = [
    {   
        dir: "BACKGROUND",
        id: 1,
        position: { //will change
            x: 0,
            y: 0
        },
        size: { 
            width: width, 
            height: height
        },
        elements: {}
    },
    {   
        dir: "BODY",
        id: 2,
        position: { //will change
            x: 0,
            y: 0
        },
        size: { 
            width: width,
            height: height
        },
        elements: {}
    },
    {   
        dir: "HEAD",
        id: 3,
        position: { //will change
            x: 0,
            y: 0
        },
        size: { 
            width: width,
            height: height
        },
        elements: {}
    },
    {   
        dir: "EYES",
        id: 4,
        position: { //will change
            x: 0,
            y: 0
        },
        size: { 
            width: width,
            height: height
        },
        elements: {}
    },
    {   
        dir: "HAT-HAIR",
        id: 5,
        position: { //will change
            x: 0,
            y: 0
        },
        size: { 
            width: width,
            height: height
        },
        elements: {}
    },
    {   
        dir: "MOUTHS",
        id: 6,
        position: { //will change
            x: 0,
            y: 0
        },
        size: { 
            width: width,
            height: height
        },
        elements: {}
    },
    // {   
    //     dir: "Mouth",
    //     id: 7,
    //     position: { //will change
    //         x: 100,
    //         y: 50
    //     },
    //     size: { 
    //         width: width - 200,
    //         height: height - 200
    //     },
    //     elements: {}
    // },
    // {   
    //     dir: "Eyes",
    //     id: 8,
    //     position: { //will change
    //         x: 100,
    //         y: 50
    //     },
    //     size: { 
    //         width: width - 200,
    //         height: height - 200
    //     },
    //     elements: {}
    // },
    // {   
    //     dir: "Foam",
    //     id: 9,
    //     position: { //will change
    //         x: 100,
    //         y: 50
    //     },
    //     size: { 
    //         width: width - 200,
    //         height: height - 200
    //     },
    //     elements: {}
    // }
];

module.exports = {
    width,
    height,
    layers,
    rarity,
    baseURIHost,
    specials,
    specialDnaSegments
}



