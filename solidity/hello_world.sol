//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.26;

contract helloWorld{

    constructor() payable {
        //this is a constructor

    }

    function hello() public pure returns(string memory)
    {
        return "Hello Wrold";
    }

}
