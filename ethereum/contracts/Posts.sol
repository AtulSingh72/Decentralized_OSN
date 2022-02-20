pragma solidity 0.4.17;

contract PostFactory {
    address[] public deployedPosts;
    uint256 public min_contribution;

    function createPost(string hash, string content) public {
        address post = new Post(hash, msg.sender, content);
        deployedPosts.push(post);
    }

    function getPosts() public view returns (address[]) {
        return deployedPosts;
    }

    function setMinContribution(uint256 contribution) public {
        min_contribution = contribution;
    }
}

contract Post {
    string public image_hash;
    string public content;
    address public author;
    PostFactory factory;

    function Post(
        string hash,
        address creator,
        string text
    ) public payable {
        image_hash = hash;
        author = creator;
        content = text;
        factory = PostFactory(msg.sender);
    }

    function setImageHash(string hash) public {
        image_hash = hash;
    }

    function setContent(string text) public {
        content = text;
    }

    function receiveContribution() public payable {
        require(factory.min_contribution() <= msg.value);
        author.transfer(this.balance);
    }
}
