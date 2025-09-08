// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// define contract
contract MyNFT is ERC721, Ownable {

   // create variable that wil store each NFT 
    uint256 public  tokenCounter;

  // Define constructor that will runs once and asign token to 0 
    constructor () ERC721("MyNFT", "MNFT") Ownable(msg.sender) {
        tokenCounter = 0;
    }

// define MintNFT function that will mint NFT to each address
// it will be executed by owner of the contract
    function MintNFT(address to) public onlyOwner returns (uint256) {
        // assign new token ID to token counter to create unique btn NFTs
        uint256 newTokenId = tokenCounter;
        // Call _safeMint from openzeppelin which will mint each token to their address
        _safeMint(to, newTokenId);
        // increase token to 1 
        tokenCounter += 1;
        // return new token ID

        return newTokenId;
    }
}