// DAO is smart contract that allows people to propose action, vote proposal, execute the winning proposals
// DAO -> Decentralized Autonomous Organization
// Autonomous -> runs automatically based on rule runs on smart contract
// Organization -> a group of people with shared goal
// on ETHereum DAO let people pool money together and vote how to spend it without needing bank 

pragma solidity ^0.8.28;

contract SimpleDAO {
    struct Proposal {
        
        string description;
        uint256 voteCount;
        bool executed; 
    }

    Proposal[] public proposals;
    mapping (address => bool) hasVoted;
// create proposal
    function 
}