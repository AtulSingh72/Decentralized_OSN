import { web3, metamask_provider } from "./web3";
import PostFactory from "./build/PostFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(PostFactory.interface),
	"0x78dC420cd74533442633c63BDb02A5cBA3ead1f8"
);

export default instance;
