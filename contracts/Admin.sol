// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;


contract Admin{
    address payable private owner;
    constructor() {
        owner = payable(msg.sender);
    }

    function pay() external payable{
        owner.transfer(msg.value);
    }
}