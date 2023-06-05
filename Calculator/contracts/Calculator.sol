// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Calculator {
    constructor() public {}

    uint256 public result;

    function add(uint256 a, uint256 b) public {
        result = a + b;
    }

    function subtract(uint256 a, uint256 b) public {
        result = a - b;
    }

    function multiply(uint256 a, uint256 b) public {
        result = a * b;
    }

    function divide(uint256 a, uint256 b) public {
        require(b != 0, "Division by zero");
        result = a / b;
    }

    function getResult() public view returns (uint256) {
        return result;
    }
}
