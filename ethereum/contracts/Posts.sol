pragma solidity 0.4.17;

contract PostFactory {
    address[] public deployedPosts;
    uint256 public min_contribution;
    mapping(address => bool) public managers_map;
    address[] public managers_array;
    address[] public ongoing_elections;
    

    function PostFactory() public {
        managers_map[msg.sender] = true;
        managers_array.push(msg.sender);
    }

    function addManager(address new_manager) public {
        managers_map[new_manager] = true;
        managers_array.push(new_manager);
    }

    function getManagersList() public view returns (address[]) {
        return managers_array;
    }

    function createPost(string hash, string content) public {
        address post = new Post(hash, msg.sender, content);
        deployedPosts.push(post);
    }

    function getPosts() public view returns (address[]) {
        return deployedPosts;
    }

    function setMinContribution(uint256 contribution) public {
        require(managers_map[msg.sender]);
        min_contribution = contribution;
    }

    function createComment(
        address parent,
        string image_hash,
        string content
    ) public {
        address comment = new Post(image_hash, msg.sender, content);
        Post parent_post = Post(parent);
        parent_post.addComment(comment);
    }

    function newElection(address candidate) public {
        address ele = new election(candidate);
        ongoing_elections.push(ele);
        
    }
}

contract Post {
    string public image_hash;
    string public content;
    address public author;
    PostFactory factory;
    address[] comments;

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

    function addComment(address comment) public {
        comments.push(comment);
    }

    function getComments() public view returns (address[]) {
        return comments;
    }
}



contract election{

    address candidate;
    mapping(address => bool) public voters;
    uint256 vote_yes;
    uint256 vote_no;
    bool voting_ended;
    PostFactory factory;


    function election(address cand) public {
        candidate = cand;
        vote_yes = 0;
        vote_no = 0;
        voting_ended = false;
        factory = PostFactory(msg.sender);
    }

    
    function voteFor(address voter) public {
        require(!voting_ended);
        if(voters[voter] == false){
            voters[voter] = true;
            vote_yes += 1;
        }
        
    }

    function voteAgainst(address voter) public {
        require(!voting_ended);
        if(voters[voter] == false){
            voters[voter] = false;
            vote_no += 1;
        }
    }

    function result() public returns (bool) {
        voting_ended = true;
        if(vote_yes > vote_no){
            factory.addManager(candidate);
            return true;
        }
        else{
            return false;
        }
        
    }

}