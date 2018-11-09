pragma solidity ^0.4.24;

contract PayTip {
    address public client;
    address public stylist;
    uint public tip;
    
    constructor() public {
        stylist = msg.sender;
    }
    
    function setTip (uint amount) public {
        tip = amount * 1; //1 ether
        client = msg.sender;
    }

    function acceptTip () public {
        stylist = msg.sender;
    }
    
    function finishPayment() public {
        stylist.transfer(address(this).balance);
    }
    
}