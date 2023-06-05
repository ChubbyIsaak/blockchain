pragma solidity >=0.4.22 <0.9.0;

contract Calculator {
  constructor()  public {
  }

  // Add two numbers together
  function add(uint256 a, uint256 b) public pure returns (uint256) {
    return a + b;
  }

  // Subtract one number from another
  function subtract(uint256 a, uint256 b) public pure returns (uint256) {
    return a - b;
  }

  // Multiply two numbers together
  function multiply(uint256 a, uint256 b) public pure returns (uint256) {
    return a * b;
  }

  // Divide one number by another
  function divide(uint256 a, uint256 b) public pure returns (uint256) {
    return a / b;
  }
}
