pragma solidity ^0.4.22;

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

    function removeManager(address del_manager) public {
        managers_map[del_manager] = false;
        for(uint i = 0; i < managers_array.length; i++) {
                if(managers_array[i] == del_manager) {
                    delete managers_array[i];
                    break;
                }
            }
    }

    function getManagersList() public view returns (address[]) {
        return managers_array;
    }

    function createPost(string hash, string content) public {
        address post = new Post(hash, msg.sender, content, address(this));
        deployedPosts.push(post);
    }

    function getPosts() public view returns (address[]) {
        return deployedPosts;
    }

    function setMinContribution(uint256 contribution) public {
        require(managers_map[msg.sender]);
        min_contribution = contribution;
    }

    function getOngoingElections() public view returns(address[]) {
        return ongoing_elections;
    }

    function createComment(
        address parent,
        string image_hash,
        string content
    ) public {
        address comment = new Post(image_hash, msg.sender, content, parent);
        Post parent_post = Post(parent);
        parent_post.addComment(comment);
    }

    function newElection() public {
        require(managers_map[msg.sender] == false);
        address ele = new election(msg.sender);
        ongoing_elections.push(ele);
    }

    function newDeElection(address candidate) public {
        require(managers_map[candidate]);
        address de_ele = new deElection(candidate);
        ongoing_elections.push(de_ele);
    }

    function deleteAtIndex(uint index) public {
        address[] memory new_deployed_post = new address[](deployedPosts.length - 1);
        uint count = 0;
        for(uint i = 0; i < deployedPosts.length; i++) {
            if(i == index) continue;
            else {
                new_deployed_post[count] = deployedPosts[i];
                count++;
            }
        }
        deployedPosts = new_deployed_post;
    }
}

contract Post {
    string public image_hash;
    string public content;
    address public author;
    PostFactory factory;
    address[] comments;
    address parent;

    function Post(
        string hash,
        address creator,
        string text,
        address par
    ) public payable {
        image_hash = hash;
        author = creator;
        content = text;
        factory = PostFactory(msg.sender);
        parent = par;
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

    function deleteAtIndex(uint index) public {
        address[] memory new_deployed_post = new address[](comments.length - 1);
        uint count = 0;
        for(uint i = 0; i < comments.length; i++) {
            if(i == index) continue;
            else {
                new_deployed_post[count] = comments[i];
                count += 1;
            }
        }
        comments = new_deployed_post;
    }

    function deletePost() public {
        require(factory.managers_map(msg.sender));
        address caller = msg.sender;

        // delete current post from parent array
        if(parent == address(factory)) {
            address[] memory deployedPosts = factory.getPosts();
            for(uint i = 0; i < deployedPosts.length; i++) {
                if(deployedPosts[i] == address(this)) {
                    factory.deleteAtIndex(i);
                    break;
                }
            }
        }
        else {
            Post parent_post = Post(parent);
            address[] memory parent_comments = parent_post.getComments();
            for(i = 0; i < parent_comments.length; i++) {
                if(parent_comments[i] == address(this)) {
                    parent_post.deleteAtIndex(i);
                    break;
                }
            }
        }

        // delete all child posts
        address[] dummy_comments = comments;
        for(i = 0; i < dummy_comments.length; i++) {
            Post curr_comment = Post(dummy_comments[i]);
            curr_comment.deletePost();
        }

        // delete current post
        selfdestruct(caller);
    }

}



contract election{

    address public candidate;
    mapping(address => bool) public voters;
    uint256 public vote_yes;
    uint256 public vote_no;
    bool public voting_ended;
    uint256 public createTime;
    PostFactory factory;


    function election(address cand) public {
        candidate = cand;
        vote_yes = 0;
        vote_no = 0;
        createTime = now;
        factory = PostFactory(msg.sender);
    }

    
    function voteFor(address voter, uint256 timestamp) public {
        require(!isElectionEnded(timestamp));
        if(voters[voter] == false){
            voters[voter] = true;
            vote_yes += 1;
        }
        
    }

    function voteAgainst(address voter, uint256 timestamp) public {
        require(!isElectionEnded(timestamp));
        if(voters[voter] == false){
            voters[voter] = false;
            vote_no += 1;
        }
    }

    function timePassed() public view returns(uint256) {
        return now - createTime;
    }

    function isElectionEnded(uint256 timestamp) public view returns(bool) {
        return (timestamp > createTime + 30 seconds);
    }

    function addAdmin(uint256 timestamp) public {
        require(isElectionEnded(timestamp));
        factory.addManager(candidate);
        
    }
}




contract deElection{

    address public candidate;
    mapping(address => bool) public voters;
    uint256 public vote_yes;
    uint256 public vote_no;
    bool public voting_ended;
    uint256 public createTime;
    PostFactory factory;


    function deElection(address cand) public {
        candidate = cand;
        vote_yes = 0;
        vote_no = 0;
        createTime = now;
        factory = PostFactory(msg.sender);
    }

    
    function voteFor(address voter, uint256 timestamp) public {
        require(!isElectionEnded(timestamp));
        if(voters[voter] == false){
            voters[voter] = true;
            vote_yes += 1;
        }
        
    }

    function voteAgainst(address voter, uint256 timestamp) public {
        require(!isElectionEnded(timestamp));
        if(voters[voter] == false){
            voters[voter] = false;
            vote_no += 1;
        }
    }

    function timePassed() public view returns(uint256) {
        return now - createTime;
    }

    function isElectionEnded(uint256 timestamp) public view returns(bool) {
        return (timestamp > createTime + 30 seconds);
    }

    function removeAdmin(uint256 timestamp) public {
        require(isElectionEnded(timestamp));
        factory.removeManager(candidate);
        
    }
}