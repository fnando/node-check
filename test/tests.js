const assert = require("assert");
const nodeCheck = require("..");
const path = require("path");

function test(description, callback) {
  try {
    callback();
  } catch (error) {
    console.error(`❌  \x1b[0;31m${description}\x1b[0m`);
    console.error(error.stack);
    process.exit(1);
  }
}

test("fails when required version for engine is not available", () => {
  assert.throws(() => {
    nodeCheck("node", "missing.json", {node: "6.8.0"});
  }, "You must specify a version on your package.json file.");
});

test("fails when required version for engine is not available", () => {
  assert.throws(() => {
    nodeCheck("node", "missing.json", {node: "6.8.0"});
  }, "You must specify a version on your package.json file.");
});

test("passes when node version matches exact version", () => {
  assert.doesNotThrow(() => {
    nodeCheck("node", "test/support/exact_version.json", {node: "6.8.0"});
  });
});

test("fails when requirements arent't satisfied", () => {
  assert.throws(() => {
    nodeCheck("node", "test/support/exact_version.json", {node: "6.6.0"});
  }, "You required node 6.8.0; using v6.6.0 instead.");
});

test("passes when node version matches expression", () => {
  assert.doesNotThrow(() => {
    nodeCheck("node", "test/support/expression.json", {node: "6.9.0"});
  });
});

test("fails when expression isn't satisfied", () => {
  assert.throws(() => {
    nodeCheck("node", "test/support/expression.json", {node: "4.0.0"});
  }, "You required node >= 6.8.0 < 7; using v4.0.0 instead.");
});
