import web3 from "./web3";
import PostFactory from "./build/PostFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(PostFactory.interface),
	"0x535A0bDbFC26F40A601BAf7598535ed42E0b7aF3"
);

export default instance;
