const contractAddress = '0x3d7e6074c3aE893A63Be0334F04E0b48138737aD';
const contractAbi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "a",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "b",
                "type": "uint256"
            }
        ],
        "name": "add",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "a",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "b",
                "type": "uint256"
            }
        ],
        "name": "subtract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "a",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "b",
                "type": "uint256"
            }
        ],
        "name": "multiply",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "a",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "b",
                "type": "uint256"
            }
        ],
        "name": "divide",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// Crea una instancia de Web3
const web3 = new Web3('http://127.0.0.1:7545');
// Crea una instancia del contrato
const calculatorContract = new web3.eth.Contract(contractAbi, contractAddress);

function add() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);

    const options = {
        from: '0x5692614fC1a969759a8F307c3847758E2Bf4E5e7'
    };

    calculatorContract.methods.add(number1, number2).send(options)
        .then(() => {
            document.getElementById('result').textContent = 'Suma exitosa';
        })
        .catch((error) => {
            document.getElementById('error').textContent = 'Error: ' + error.message;
        });
}

function subtract() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);

    const options = {
        from: '0x48331AF1dF570C1d05E8230c0110644B284f7B1D'
    };

    calculatorContract.methods.subtract(number1, number2).send(options)
        .then(() => {
            document.getElementById('result').textContent = 'Resta exitosa';
        })
        .catch((error) => {
            document.getElementById('error').textContent = 'Error: ' + error.message;
        });
}

function multiply() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);

    const options = {
        from: '0x3d2fA460d3667D9d257cb066C8e77925a03C3c30'
    };

    calculatorContract.methods.multiply(number1, number2).send(options)
        .then(() => {
            document.getElementById('result').textContent = 'Multiplicacion Exitosa';
        })
        .catch((error) => {
            document.getElementById('error').textContent = 'Error: ' + error.message;
        });
}

function divide() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);

    const options = {
        from: '0x847AA6f9F192d95FC57914D7a9b27d627D4B7654'
    };

    calculatorContract.methods.divide(number1, number2).send(options)
        .then(() => {
            document.getElementById('result').textContent = 'Division exitosa';
        })
        .catch((error) => {
            document.getElementById('error').textContent = 'Error: ' + error.message;
        });
}