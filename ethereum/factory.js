import web3 from "./web3";
import PostFactory from "./build/PostFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(PostFactory.interface),
	"0xc92B1247402ca1a7dF83D5099c25b4f793f3dA01"
);

export default instance;
