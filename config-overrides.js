const { addWebpackAlias, override } = require("customize-cra");
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  webpack: override(
    addWebpackAlias({
      "@": resolve("./src"),
    })
  ),
};
