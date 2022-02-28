import { web3, metamask_provider } from "./web3";
import PostFactory from "./build/PostFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(PostFactory.interface),
	"0xcB6aa06873172911CC7c326D699b50DB933DD180"
);

export default instance;
