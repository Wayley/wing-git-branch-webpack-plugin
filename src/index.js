const child_process = require("child_process");
function git(command) {
  return child_process.execSync(`git ${command}`, { encoding: "utf8" }).trim();
}
function getGitBranchInfo() {
  return [
    `BranchName: ${git("name-rev --name-only HEAD")}`,
    `CommitHash: ${git("show -s --format=%H")}`,
    `Description: ${git("show -s --format=%s")}`,
    `Committer: ${git("show -s --format=%cn")} <${git(
      "show -s --format=%ce"
    )}>`,
    `CommitDate: ${new Date(git("show -s --format=%cd"))}`,
    `Date: ${new Date()}`,
  ].join("\n");
}
class WingGitBranchWebpackPlugin {
  static defaultOptions = {
    outputFile: "version.txt",
  };
  constructor(options = {}) {
    this.options = { ...WingGitBranchWebpackPlugin.defaultOptions, ...options };
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      "WingGitBranchWebpackPlugin",
      (compilation, callback) => {
        const content = getGitBranchInfo();
        compilation.assets[this.options.outputFile] = {
          source: () => content,
          size: () => content.length,
        };
        callback();
      }
    );
  }
}

exports.WingGitBranchWebpackPlugin = WingGitBranchWebpackPlugin;

module.exports = WingGitBranchWebpackPlugin;
