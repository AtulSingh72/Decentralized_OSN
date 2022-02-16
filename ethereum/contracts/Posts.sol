pragma solidity 0.4.17;

contract PostFactory {
    address[] public deployedPosts;

    function createPost(string hash, string content) public {
        address post = new Post(hash, msg.sender, content);
        deployedPosts.push(post);
    }

    function getPosts() public view returns (address[]) {
        return deployedPosts;
    }
}

contract Post {
    string public image_hash;
    string public content;
    address public author;

    function Post(
        string hash,
        address creator,
        string text
    ) public payable {
        image_hash = hash;
        author = creator;
        content = text;
    }

    function setImageHash(string hash) public {
        image_hash = hash;
    }

    function setContent(string text) public {
        content = text;
    }
}
