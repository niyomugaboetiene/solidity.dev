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
        // store proposalId in variable instead of writting proposal[proposalId].executed
        Proposal storage proposal  = proposals[proposalId];
        require(!proposal.executed, "Also executed");

         // check if proposal is voted 
        if (proposal.voteCount > 1) {
            // mark proposal as executed
            proposal.executed = true;
        }
    }

    // view proposal
    // define function to read all proposals from the contract
    function getProposal() public view returns (
        // array of string to define description of each proposal
        string[] memory description,
        // array to define how many votes each proposal has
        uint256[] memory voteCount,
        // array showin if each proposal is executed or no
        bool[] memory executed

    ) {
        // get length of proposals array
        uint256 len = proposals.length;
        // store each description on the decription array
        description = new string[](len);
        voteCount = new uint256[](len);
        executed = new bool[](len);
        
        for (uint256 i = 0; i < len; i ++) {
            // gets only proposal in the blockchain
            Proposal storage p = proposals[i];
            // gets description of the current index
            description[i] = p.description;
            // gets numbers of proposals for this proposal
            voteCount[i] = p.voteCount;
            // get if is executed or no
            executed[i] = p.executed;
        }
        return (description, voteCount, executed);
    }
}