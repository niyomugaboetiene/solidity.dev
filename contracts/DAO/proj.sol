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
    require(proposalId < proposals.length, "Invalid proposal !!");
    require(!proposals[proposalId].executed, "Already executed !!");
    
    if (proposals[proposalId].voteCount > 1) {
         proposals[proposalId].executed = true;
    }
   }

   function getProposal() public view returns (
       string[] memory _description,
       uint256[] memory voteCount,
       bool[] memory executed
   ) {
        uint256 len = proposals.length;
        _description = new string[](len);
        voteCount = new uint256[](len);
        executed = new bool[](len);

        for(uint256 i = 0; i < len; i++) {
            Proposal storage p = proposals[i];

            _description[i] = p.description;
            voteCount[i] = p.voteCount;
            executed[i] = p.executed;
        }

        return (_description, voteCount, executed);
   }
}