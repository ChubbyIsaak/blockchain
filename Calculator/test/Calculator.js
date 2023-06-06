const Calculator = artifacts.require("Calculator");

contract("Calculator", (accounts) => {
    it("should perform calculations and check min/max numbers", async () => {
        const calculator = await Calculator.deployed();

        // Addition
        await calculator.add(5, 10);
        let result = await calculator.getResult();
        let maxNumber = await calculator.maxNumber();
        let minNumber = await calculator.minNumber();
        console.log("Addition Result:", result.toString());
        console.log("Max Number:", maxNumber.toString());
        console.log("Min Number:", minNumber.toString());

        // Subtraction
        await calculator.subtract(15, 7);
        result = await calculator.getResult();
        maxNumber = await calculator.maxNumber();
        minNumber = await calculator.minNumber();
        console.log("Subtraction Result:", result.toString());
        console.log("Max Number:", maxNumber.toString());
        console.log("Min Number:", minNumber.toString());

        // Multiplication
        await calculator.multiply(3, 6);
        result = await calculator.getResult();
        maxNumber = await calculator.maxNumber();
        minNumber = await calculator.minNumber();
        console.log("Multiplication Result:", result.toString());
        console.log("Max Number:", maxNumber.toString());
        console.log("Min Number:", minNumber.toString());

        // Division
        await calculator.divide(20, 4);
        result = await calculator.getResult();
        maxNumber = await calculator.maxNumber();
        minNumber = await calculator.minNumber();
        console.log("Division Result:", result.toString());
        console.log("Max Number:", maxNumber.toString());
        console.log("Min Number:", minNumber.toString());
    });
});
