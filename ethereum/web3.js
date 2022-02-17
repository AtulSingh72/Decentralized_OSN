import Web3 from "web3";

let web3, metamask_provider;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
	web3 = new Web3(window.web3.currentProvider);
	metamask_provider = true;
} else {
	const provider = new Web3.providers.HttpProvider("http://10.42.0.86:7545");
	web3 = new Web3(provider);
	metamask_provider = false;
}

export { web3, metamask_provider };
