pragma solidity 0.4.17;

contract PostFactory {
    address[] public deployedPosts;

    function createPost(string hash) public {
        address post = new Post(hash, msg.sender);
        deployedPosts.push(post);
    }

    function getPosts() public view returns (address[]) {
        return deployedPosts;
    }
}

contract Post {
    string public image_hash;
    address author;

    function Post(string hash, address creator) public payable {
        image_hash = hash;
        author = creator;
    }

    function setImageHash(string hash) public {
        image_hash = hash;
    }
}
