import Web3 from 'web3';

interface AbiItem {
    inputs: { internalType: string; name: string; type: string; }[];
    name: string;
    outputs: { internalType: string; name: string; type: string; }[];
    stateMutability: "pure" | "view" | "nonpayable" | "payable";
    type: "function" | "constructor" | "event" | "fallback";
}

const contractAddress = '0x5cd3d50e94ffb770e97c2fb7098436d939dc52d62e62d4a9b486f83d640d21b3';
const contractAbi: AbiItem[] = [
    {
        inputs: [],
        name: 'constructor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'a', type: 'uint256' }, { internalType: 'uint256', name: 'b', type: 'uint256' }],
        name: 'add',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'a', type: 'uint256' }, { internalType: 'uint256', name: 'b', type: 'uint256' }],
        name: 'divide',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getResult',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'maxNumber',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'minNumber',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'a', type: 'uint256' }, { internalType: 'uint256', name: 'b', type: 'uint256' }],
        name: 'multiply',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'result',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{ internalType: 'uint256', name: 'a', type: 'uint256' }, { internalType: 'uint256', name: 'b', type: 'uint256' }],
        name: 'subtract',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
];

const web3 = new Web3('http://127.0.0.1:7545');
const contract = new web3.eth.Contract(contractAbi, contractAddress);

async function callContractFunction(functionName: string, params: any[]) {
    const accounts = await web3.eth.getAccounts();
    const from = accounts[0];

    const gas = await contract.methods[functionName](...params).estimateGas({ from });
    const result = await contract.methods[functionName](...params).send({ from, gas });

    console.log(result);
}

async function add() {
    const number1 = (document.getElementById("number1") as HTMLInputElement).value;
    const number2 = (document.getElementById("number2") as HTMLInputElement).value;
    await callContractFunction('add', [number1, number2]);
}

async function subtract() {
    const number1 = (document.getElementById("number1") as HTMLInputElement).value;
    const number2 = (document.getElementById("number2") as HTMLInputElement).value;
    await callContractFunction('subtract', [number1, number2]);
}

async function multiply() {
    const number1 = (document.getElementById("number1") as HTMLInputElement).value;
    const number2 = (document.getElementById("number2") as HTMLInputElement).value;
    await callContractFunction('multiply', [number1, number2]);
}

async function divide() {
    const number1 = (document.getElementById("number1") as HTMLInputElement).value;
    const number2 = (document.getElementById("number2") as HTMLInputElement).value;
    await callContractFunction('divide', [number1, number2]);
}
