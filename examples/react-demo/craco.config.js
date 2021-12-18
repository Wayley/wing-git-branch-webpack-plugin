const WingGitBranchWebpackPlugin = require("wing-git-branch-webpack-plugin");

module.exports = {
  webpack: {
    plugins: [new WingGitBranchWebpackPlugin()],
  },
};
