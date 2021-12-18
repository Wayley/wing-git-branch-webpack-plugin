# wing-git-branch-webpack-plugin

wing git branch webpack plugin

## Install

```shell
$ npm install wing-git-branch-webpack-plugin --save-dev
# or
$ yarn add wing-git-branch-webpack-plugin -D
```

## Usage

```js
const WingGitBranchWebpackPlugin = require("wing-git-branch-webpack-plugin");

module.exports = {
  //...
  plugins: [
    new WingGitBranchWebpackPlugin(),
    // or
    new WingGitBranchWebpackPlugin({ outputFile: "outputFile.txt" }),
  ],
};
```
