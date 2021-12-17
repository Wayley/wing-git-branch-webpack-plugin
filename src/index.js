const child_process = require("child_process");
function git(command) {
  return child_process.execSync(`git ${command}`, { encoding: "utf8" }).trim();
}
function getGitBranchInfo() {
  return [
    `BranchName: ${git("name-rev --name-only HEAD")}`,
    `CommitHash: ${git("show -s --format=%H")}`,
    `Author: ${git("show -s --format=%cn")} <${git("show -s --format=%ce")}>`,
    `Date: ${git("show -s --format=%cd")}`,
    `Description: ${git("show -s --format=%s")}`,
  ];
}
class WingGitBranchWebpackPlugin {
  static defaultOptions = {
    outputFile: "version.txt",
  };
  constructor(options = {}) {
    this.options = { ...WingGitBranchWebpackPlugin.defaultOptions, ...options };
  }
  apply(compiler) {
    const pluginName = WingGitBranchWebpackPlugin.name;
    const { webpack } = compiler;
    const { Compilation } = webpack;
    const { RawSource } = webpack.sources;
    compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: pluginName,
          stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
        },
        (assets) => {
          const content = getGitBranchInfo().join("\n");
          compilation.emitAsset(
            this.options.outputFile,
            new RawSource(content)
          );
        }
      );
    });
  }
}

exports.WingGitBranchWebpackPlugin = WingGitBranchWebpackPlugin;

module.exports = WingGitBranchWebpackPlugin;
