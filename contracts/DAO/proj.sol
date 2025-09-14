pragma solidity ^0.8.28;

contract DAO {
    struct Proposal {
        string description;
        uint256 voteCount;
        bool executed;
    }

    Proposal[] public proposals;
    mapping (address => bool) isVoted;

    function CreateProposal(address memory _description) public {
        proposals.push(Proposal{
            description: _description,
            voteCount: 0,
            executed: false
        });
    }

    
}