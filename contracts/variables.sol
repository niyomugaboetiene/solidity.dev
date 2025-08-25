pragma solidity ^0.8.28;

contract MyContract {
    uint public myNumber; // here is state variable
    // public make variable readed by someone else  means outside of the contract anyone reads its value


    function setNuumber (uint _num) public {
        myNumber = _num;
    }

    function getNumber () public view returns (uint) {
        return myNumber;
    }
}