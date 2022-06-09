// node_modules
const fs = require("fs");
const sharp = require("sharp");

// constants
const IMAGE_TO_RESIZE = String('./AppIcon.png');
const ICON_SIZES = [
    Number('20'),
    Number('29'),
    Number('40'),
    Number('58'),
    Number('60'),
    Number('76'),
    Number('80'),
    Number('87'),
    Number('120'),
    Number('152'),
    Number('167'),
    Number('180'),
    Number('1024'),
];

// create temp directory
const tempDirectory = `temp-download-${Date.now()}`;
fs.mkdirSync(tempDirectory);

// resize image
ICON_SIZES.map((value) => {
    return sharp(IMAGE_TO_RESIZE)
    .resize(value, value)
    .toFile(`app_icon_${value}x${value}.png`)
    .catch((error) => console.error(error));
});