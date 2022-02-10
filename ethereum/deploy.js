const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const provider = new HDWalletProvider(
	"artist vote valve injury still supreme seminar chase build follow finish chunk",
	"http://127.0.0.1:7545"
);
const web3 = new Web3(provider);
const compiledFactory = require("./build/PostFactory.json");
const compiledPost = require("./build/Post.json");

let post_factory;
let accounts;

const deploy = async () => {
	accounts = await web3.eth.getAccounts();

	post_factory = await new web3.eth.Contract(
		JSON.parse(compiledFactory.interface)
	)
		.deploy({ data: compiledFactory.bytecode })
		.send({ from: accounts[0], gas: "1000000" });

	console.log("Contract deployed at ", post_factory.options.address);
};

deploy();
