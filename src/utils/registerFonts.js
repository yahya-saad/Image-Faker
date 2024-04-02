const { registerFont } = require("canvas");
const { resolve } = require("path");

registerFont(resolve(__dirname, "../public/fonts/Roboto-Regular.ttf"), { family: "Roboto" });
registerFont(resolve(__dirname, "../public/fonts/Lora-Regular.ttf"), { family: "Lora" });
registerFont(resolve(__dirname, "../public/fonts/OpenSans-Regular.ttf"), { family: "OpenSans" });
registerFont(resolve(__dirname, "../public/fonts/Oswald-Regular.ttf"), { family: "Oswald" });
registerFont(resolve(__dirname, "../public/fonts/PlayfairDisplay-Regular.ttf"), { family: "PlayfairDisplay" });
registerFont(resolve(__dirname, "../public/fonts/Raleway-Regular.ttf"), { family: "Raleway" });
