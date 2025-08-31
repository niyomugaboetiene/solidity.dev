pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyTokens is ERC20, Ownable {
    constructor() ERC20("MYTOKEN", "MTK") Ownable(msg.sender) {
        _mint(msg.sender, 100 * 10 ** decimals());
    }

    function transfer (address to, uint256 amount) public override returns(bool) {
        // override means replace your own vision from parent function
        require(balanceOf(msg.sender) >= amount, "Balance not enought");
        _transfer(msg.sender, to, amount);

        return true;
    }

    function  checkBalance(address account) public returns (uint256) {
        return balanceOf(account);
    }
}