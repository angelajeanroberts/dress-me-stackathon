pragma solidity ^0.4.24;

contract PayTip {
    address public client;
    address public stylist;
    uint public tip;
    
    constructor() public {
        client = msg.sender;
    }
    
    function setTip (address to) public payable {
        tip = msg.value;
        client = msg.sender;
        stylist = to;
    }
    
    function finishPayment() public {
        stylist.transfer(address(this).balance);
    }

    function kill() public {
        if(client == msg.sender) {
            selfdestruct(client);
        }
    }    
}