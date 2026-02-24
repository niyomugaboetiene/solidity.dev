// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyTokens is ERC20, Ownable {
    constructor() ERC20("MYTOKEN", "MTK") Ownable(msg.sender) {
        _mint(msg.sender, 100 * 10 ** decimals());
    }

    function transfer (address to, uint256 amount) public override returns(bool) {
        // override means replace your own vision from parent function
        require(balanceOf(msg.sender) >= amount, "Balance not enough");
        _transfer(msg.sender, to, amount);

        return true;
    }

    function checkBalance(address account) public view returns (uint256) {
        return balanceOf(account);
    }

    function burn(uint256 amount) public returns (bool) {
        require(balanceOf(msg.sender) >= amount, "balance not enough");
        _burn(msg.sender, amount);

        return(true);
    }
   
function checkAllowance(address owner, address spender)  public view returns (uint256) {
    return allowance(owner, spender);
}

function giveToken(address spender, uint256 amount) public  returns (bool) {
    require(balanceOf(msg.sender) >= amount, "Balance not enough");
    _approve(msg.sender, spender, amount);

    return true;
}

function transferFrom(address from, address to, uint256 amount) public override returns (bool) {
    require(balanceOf(from) >= amount, "Balance not enough");
    require(allowance(from, msg.sender) >= amount, "Allowance exceed");

    _transfer(from, to, amount);
    _spendAllowance(from, msg.sender, amount);
    return true;
}
}

