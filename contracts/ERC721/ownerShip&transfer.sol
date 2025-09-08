pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Transfer is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;

    constructor () ERC721("NF TOKEN", "NFT") Ownable(msg.sender) {
        tokenCounter = 0;
    }

    function  mintNFT(address to, string memory tokenURI)  public onlyOwner returns(uint256) {
        uint256 newTokenId = tokenCounter;
        _safeMint(to, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        tokenCounter += 1;
        
        return newTokenId;
    }

    function  transfer(address from, address to, uint256 tokenId) public returns (bool) {
        require(msg.sender == from, "Only owner allowed");
        // transfer ownership of NFT safely from one address to another
        safeTransferFrom(from, to, tokenId);
        
        return true;
    }
}