
async function add() {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    await callContractFunction('add', [number1, number2]);
}

async function subtract() {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    await callContractFunction('subtract', [number1, number2]);
}

async function multiply() {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    await callContractFunction('multiply', [number1, number2]);
}

async function divide() {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    await callContractFunction('divide', [number1, number2]);
}
async function callContractFunction(functionName, params) {
    const Web3 = require('web3');

    // Establece la dirección del contrato y el ABI
    const contractAddress = '0x5cd3d50e94ffb770e97c2fb7098436d939dc52d62e62d4a9b486f83d640d21b3';
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
            "name": "divide",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getResult",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "maxNumber",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "minNumber",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
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
            "inputs": [],
            "name": "result",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
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
        }
    ];

    // Crea una instancia de Web3
    const web3 = new Web3('http://127.0.0.1:7545');
    // Crea una instancia del contrato
    const contract = new web3.eth.Contract(contractAbi, contractAddress);

    async function callContractFunction(functionName, params) {
        try {
            const accounts = await web3.eth.getAccounts();
            const account = accounts[0];

            // Realiza la llamada a la función del contrato
            const result = await contract.methods[functionName](...params).send({ from: account });

            console.log(result);
            // Hacer algo con el resultado de la llamada al contrato
        } catch (error) {
            console.error(error);
            // Manejar el error
        }
    }
}

try {
    const result = await contractInstance.methods[functionName](...params).call();
    document.getElementById("result").innerText = `Result: ${result}`;
    document.getElementById("error").innerText = '';
} catch (error) {
    document.getElementById("result").innerText = '';
    document.getElementById("error").innerText = error.message;
}

