function colorNameToHex(colorName) {
  const colors = {
    black: "#000000",
    silver: "#c0c0c0",
    gray: "#808080",
    white: "#ffffff",
    maroon: "#800000",
    red: "#ff0000",
    purple: "#800080",
    fuchsia: "#ff00ff",
    green: "#008000",
    lime: "#00ff00",
    olive: "#808000",
    yellow: "#ffff00",
    navy: "#000080",
    orange: "#ffa500",
    blue: "#0000ff",
    teal: "#008080",
    aqua: "#00ffff",
  };

  return colors[colorName.toLowerCase()] || null;
}

module.exports = colorNameToHex;
