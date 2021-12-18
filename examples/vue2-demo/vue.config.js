const WingGitBranchWebpackPlugin = require("../../src/index");
module.exports = {
  configureWebpack: {
    plugins: [new WingGitBranchWebpackPlugin()],
  },
};
