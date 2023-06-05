const web3 = require("truffle/web3");


class MyMigrations {
    constructor(web3) {
        this.web3 = web3;
    }

    async deploy() {
        const calculator = await this.web3.eth.contract(
            require("./contracts/Calculator.sol").Calculator
        ).new({
            from: web3.eth.accounts[0],
            data: Calculator.code,
            gas: 5000000,
        });

        console.log("Calculator deployed to address:", calculator.address);
    }
}

module.exports = new MyMigrations(web3);
