import { web3, metamask_provider } from "./web3";
import PostFactory from "./build/PostFactory.json";
import config from "./config.json";

const instance = new web3.eth.Contract(
	JSON.parse(PostFactory.interface),
	config.PostFactoryAddress
);

export default instance;
