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
         proposals.push(Proposal({
            description: _description,
            voteCount: 0,
            executed: false
         }));
    }

    function vote(uint256 proposalId) public {
        require(!hasVoted[msg.sender], "You already voted!");
        require(proposalId < proposals.length, "Invalid proposal");

        proposals[proposalId].voteCount += 1;
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
    function getProposal() public view returns (Proposal[] memory) {
        return proposals;
    }
}