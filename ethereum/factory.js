import web3 from "./web3";
import PostFactory from "./build/PostFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(PostFactory.interface),
	"0x85b279846bDEd34cb238823587391a54ED575486"
);

export default instance;
