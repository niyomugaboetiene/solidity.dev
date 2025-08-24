pragma solidity ^0.8.0;

contract MyContract {
    uint public myNumber; // here is state variable


    function setNuumber (uint _num) public {
        myNumber = _num;
    }

    function getNumber () public view returns (uint) {
        return myNumber;
    }
}