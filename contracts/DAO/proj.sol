pragma solidity ^0.8.28;

contract DAO {
    struct Proposal {
        string description;
        uint256 voteCount;
        bool executed;
    }

    Proposal[] public proposals;
    mapping (address => bool) isVoted;

    function CreateProposal(string memory _description) public {
        proposals.push(Proposal({
            description: _description,
            voteCount: 0,
            executed: false
        }));
    }

   function  Vote(uint256 proposalId) public {
       require(!isVoted[msg.sender], "Already voted !!");
       require(proposalId < proposals.length  , "Invalid proposal");

       proposals[proposalId].voteCount += 1;
       isVoted[msg.sender] = true;
   }

   function  execute(uint256 proposalId) public {
    require(proposals[proposalId].executed, "Already executed !!");
    require(proposalId < proposals.length, "Invalid proposal !!");
    
    if (proposals[proposalId].voteCount > 1) {
         proposals[proposalId].executed = true;
    }
   }
}