const WingGitBranchWebpackPlugin = require("../../dist/wing-git-branch-webpack-plugin.cjs");

module.exports = {
  webpack: {
    plugins: [new WingGitBranchWebpackPlugin()],
  },
};
