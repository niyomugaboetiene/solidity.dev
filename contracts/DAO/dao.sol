// DAO is smart contract that allows people to propose action, vote proposal, execute the winning proposals
// DAO -> Decentralized Autonomous Organization
// Autonomous -> runs automatically based on rule runs on smart contract
// Organization -> a group of people with shared goal
// on ETHereum DAO let people pool money together and vote how to spend it without needing bank 

pragma solidity ^0.8.28;

contract SimpleDAO {
    struct Proposal {
        
        string description;
        uint256 voteCount; // how many votes
        bool executed;  // mark proposal as executed to prevent double execution
    }

    Proposal[] public proposals; // store Proposal struct in the proposal variable
    mapping (address => bool) hasVoted; // each address store if it is voted or not 
// create proposal
    function createProposal (string memory _description) public {
        // define function called createProposal and takes input from the user which called description
         proposals.push(Proposal({
            // add new item in the proposals array
            // Proposal({...}) create struct variable and add its value
            description: _description,
            // its description
            voteCount: 0,
            // how many voter hote the proposal
            executed: false
            // executed to ensure it is will be executed once
         }));
    }

    function vote(uint256 proposalId) public {
        // check if user didn't voted yet
        require(!hasVoted[msg.sender], "You already voted!");
        // check if ID of proposal exist
        require(proposalId < proposals.length, "Invalid proposal");

        // in proposals array add one count to the ID of proposal 
        proposals[proposalId].voteCount += 1;
        // make the ethereum address voted 
        hasVoted[msg.sender] = true;
    }

    // Execute if proposal (one count = one vote)
    function execute(uint256 proposalId) public {
        require((proposalId < proposals.length), "Invalid proposal");
        Proposal storage proposal  = proposals[proposalId];
        require(!proposal.executed, "Also executed");

        if (proposal.voteCount > 1) {
            proposal.executed = true;
        }
    }

    // view proposal
    function getProposal() public view returns (
        string[] memory description,
        uint256[] memory voteCount,
        bool[] memory executed

    ) {
        uint256 len = proposals.length;
        description = new string[](len);
        voteCount = new uint256[](len);
        executed = new bool[](len);
        
        for (uint256 i = 0; i < len; i ++) {
            Proposal storage p = proposals[i];
            description[i] = p.description;
            voteCount[i] = p.voteCount;
            executed[i] = p.executed;
        }
        return (description, voteCount, executed);
    }
}