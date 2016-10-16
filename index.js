const path = require("path");
const fs = require("fs");
const semver = require("semver");
const MANIFEST_FILE_PATH = path.join(process.cwd(), "package.json");

function nodeCheck(engine = "node", manifestFile = MANIFEST_FILE_PATH, versions = process.versions) {
  let manifest = JSON.parse(fs.readFileSync(manifestFile));
  let requiredVersion = manifest && manifest.engines && manifest.engines[engine];
  let currentVersion = versions[engine];

  if (!requiredVersion) {
    throw new Error("You must specify a version on your package.json file.");
  }

  if (!semver.satisfies(currentVersion, requiredVersion)) {
    throw new Error(`You required ${engine} ${requiredVersion}; using v${currentVersion} instead.`);
  }
}

module.exports = nodeCheck;
