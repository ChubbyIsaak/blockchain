const Calculator = artifacts.require("Calculator");

contract("Calculator", (accounts) => {
    it("should add two numbers", async () => {
        const calculator = await Calculator.deployed();
        await calculator.add(5, 10);
        const result = await calculator.getResult();
        console.log("Addition Result:", result.toString());
    });

    it("should subtract two numbers", async () => {
        const calculator = await Calculator.deployed();
        await calculator.subtract(15, 7);
        const result = await calculator.getResult();
        console.log("Subtraction Result:", result.toString());
    });

    it("should multiply two numbers", async () => {
        const calculator = await Calculator.deployed();
        await calculator.multiply(3, 6);
        const result = await calculator.getResult();
        console.log("Multiplication Result:", result.toString());
    });

    it("should divide two numbers", async () => {
        const calculator = await Calculator.deployed();
        await calculator.divide(20, 4);
        const result = await calculator.getResult();
        console.log("Division Result:", result.toString());
    });
});
