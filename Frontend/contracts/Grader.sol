// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
import "./Admin.sol";

contract Grader{

    uint256 private coinpaid;
    uint256 public credit = 0;
    address payable private owner;
    uint256 public price;
    bytes32 public hash = 0;
    
    constructor(uint256 _price) {
        owner = payable(msg.sender);
        price = _price;
    }

    Admin private admin;
    function payAdmin() external payable{
        admin.pay{value:msg.value}();
        credit += msg.value;
    }

    function gradeproblem(bytes32 _hash) external payable{
        //Grade the problem as either success or fail. 
        require(msg.value == price,"Incorrect price.");
        require(hash == 0,"occupied");
        hash = _hash;
        owner.transfer(msg.value);
    }
    
    function complete_grading() external{
        //Requires that the grading result be uploaded off-chain. Otherwise, the grader would be untrustworthy.
        //If the hash is something else, but the grading is incomplete, the grader has cheated.
        require(msg.sender == owner);
        hash = 0;
    }

}
