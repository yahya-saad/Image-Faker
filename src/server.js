const express = require("express");
const path = require("path");
const colorNameToHex = require("./utils/colorNameToHex");
const generatePlaceholder = require("./utils/generatePlaceholder");
const app = express();
const PORT = 3000;

// Generic route handler for generating images
function generateImage(req, res, next) {
  const { width, height, size, background, textColor } = req.params;
  const { text, font } = req.query;

  // Validate Width,Heigh || Size
  if (size && isNaN(parseInt(size))) {
    return next(new Error("Size must be numeric."));
  }

  if ((width && isNaN(parseInt(width))) || (height && isNaN(parseInt(height)))) {
    return next(new Error("Width and height must be numeric."));
  }

  // Determine whether size or separate width and height is provided
  let imgParams = {};
  if (size) {
    const [w, h] = size.split("x");
    imgParams.width = +w;
    imgParams.height = h ? +h : +w;
  } else {
    imgParams.width = +width;
    imgParams.height = +height;
  }

  if (background) imgParams.background = colorNameToHex(background) || `#${background}`;
  if (textColor) imgParams.textColor = colorNameToHex(textColor) || `#${textColor}`;

  // Generate placeholder image
  const buffer = generatePlaceholder({
    ...imgParams,
    text,
    font,
  });

  res.set("Content-Type", "image/png");
  res.send(buffer);
}

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/try", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "try.html"));
});
app.get("/ping", (req, res) => {
  const buffer = generatePlaceholder({
    width: 600,
    height: 400,
    text: "Pong",
  });

  res.set("Content-Type", "image/png");
  res.send(buffer);
});

app.get("/:width/:height/:background/:textColor", generateImage);
app.get("/:width/:height", generateImage);
app.get("/:size/:background/:textColor", generateImage);
app.get("/:size", generateImage);

// Global error handler
app.use((err, req, res, next) => {
  const buffer = generatePlaceholder({
    width: 600,
    height: 400,
    text: "404",
  });

  res.set("Content-Type", "image/png");
  res.status(404).send(buffer);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
