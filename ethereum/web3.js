import Web3 from "web3";
import config from "./config.json";

let web3, metamask_provider;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
	web3 = new Web3(window.web3.currentProvider);
	metamask_provider = true;
} else {
	const provider = new Web3.providers.HttpProvider(
		config.provider.rpc_server
	);
	web3 = new Web3(provider);
	metamask_provider = false;
}

export { web3, metamask_provider };
