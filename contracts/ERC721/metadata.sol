// metadata is extra info that describe yoour NFT it tells wallet how to display your NFT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract MyNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;

    constructor () ERC721("MyNFT", "MFT") Ownable(msg.sender) {
        tokenCounter = 0;
    }

    function mintNFT(address to, string memory tokenURI_) public onlyOwner returns(uint256) {
        uint256 newTokenId = 

    }
}