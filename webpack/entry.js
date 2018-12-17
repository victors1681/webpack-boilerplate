const path = require("path");

const getEntry = () => ({
  app: [path.join(__dirname, "..", "src", "index.js")],
  vendors: ["react", "react-dom"]
});

module.exports.getEntry = getEntry;
