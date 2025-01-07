export const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
export const abi = [
        {
            type: "constructor",
            inputs: [
                {
                    name: "_priceFeedAddress",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "MIN_USD",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "cheapWithdraw",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "function",
            name: "fund",
            inputs: [],
            outputs: [],
            stateMutability: "payable"
        },
        {
            type: "function",
            name: "getAddressToAmountFunded",
            inputs: [
                {
                    name: "fundingAddress",
                    type: "address",
                    internalType: "address"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getOwner",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getSender",
            inputs: [
                {
                    name: "index",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "address"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getSenders",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address[]",
                    internalType: "address[]"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "getVersion",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "uint256",
                    internalType: "uint256"
                }
            ],
            stateMutability: "view"
        },
        {
            type: "function",
            name: "withdraw",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable"
        },
        {
            type: "error",
            name: "FundMe__NotOwner",
            inputs: []
        }
    ];
