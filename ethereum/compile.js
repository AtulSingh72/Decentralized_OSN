const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// path to store the compiled contracts and clear the directory for saving new contracts
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

// declaring path to contracts
const postPath = path.resolve(__dirname, "contracts", "Posts.sol");
const source = fs.readFileSync(postPath, "utf-8");

// compiling the contract
const output = solc.compile(source, 1).contracts;

// ensure that the directory exists else create that directory
fs.ensureDirSync(buildPath);

// saving each contract in build directory
for (let contract in output) {
	fs.outputJSONSync(
		path.resolve(buildPath, contract.replace(":", "") + ".json"),
		output[contract]
	);
}
