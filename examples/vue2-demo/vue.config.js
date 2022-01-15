const WingGitBranchWebpackPlugin = require("../../dist/wing-git-branch-webpack-plugin.cjs");
module.exports = {
  configureWebpack: {
    plugins: [new WingGitBranchWebpackPlugin()],
  },
};
