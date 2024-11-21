// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;


contract ProblemAuthor{
    uint256 public credit;
    uint256 public timeout_time;
    address payable private owner;
    bytes32 public problem_hash;
    bytes32 public hash = 0;
    constructor(uint256 _timeout_time, bytes32 _problem_hash) payable{
        owner = payable(msg.sender);
        credit = msg.value;
        timeout_time = _timeout_time;
        problem_hash = _problem_hash;
    }
    
    function reclaim_fund() external {
        require(msg.sender == owner);
        require(block.timestamp >= timeout_time);
        credit = 0;
        owner.transfer(address(this).balance);
    }

    function submitsolution(bytes32 _hash) external {
        require(hash == 0);
        hash = _hash;
    }

    function reset_problem() external returns(bytes32){
        //Reset in case something is wrong.
        require(msg.sender == owner);
        bytes32 Temp = hash;
        hash = 0;
        return Temp;
    }
    function pay(address payable solver) external{
        // The solver needs to be the first solution submitted.
        require(msg.sender == owner);
        solver.transfer(address(this).balance);
        credit = 0;
        
    }
    
    
    
}