const Calculator = artifacts.require("Calculator");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(Calculator)
        .then(() => {
            return Calculator.deployed();
        })
        .then((instance) => {
            console.log("Calculator deployed to address:", instance.address);
        });
};
