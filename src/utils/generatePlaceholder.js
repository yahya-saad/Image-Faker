const { createCanvas, registerFont } = require("canvas");
require("./registerFonts");
function generatePlaceholder(options) {
  const {
    width,
    height,
    text = `${width}x${height}`,
    font = "Roboto",
    background = "#ddd",
    textColor = "#1e293b",
  } = options;

  try {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Calculate font size based on canvas size and text length
    const fontSize = Math.max(Math.min((width / text.length) * 1.3, height * 0.5), 5);

    ctx.font = `${fontSize}px ${font}`;
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    return canvas.toBuffer("image/png");
  } catch (error) {
    return null;
  }
}

module.exports = generatePlaceholder;
