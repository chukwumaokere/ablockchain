# This is just a test I created for understanding how Blockchains work (relative to cryptocurrency)

```bash
blockchaintest# node main.js 
Mining block 1...
Block mined: 0000003b5d1a015e53e55b3a8d61179967545d2a0a6dd9aeef5716cc497abbc8
Mining block 2...
Block mined: 00000220c6e021babcaae6ff002a9b18c4375e7ca058c05f2a692d4cc81a90f0
{
    "chain": [
        {
            "index": 0,
            "timestamp": "2018-08-08 18:29:05",
            "data": "Genesis Block",
            "previousHash": "0",
            "nonce": 0,
            "hash": "5d806704ac38e2b6cc8cb1bcc5c84bbb1a1e645577d4da505732e24b55a7e83c"
        },
        {
            "index": 1,
            "timestamp": "2018-08-08 18:29:05",
            "data": {
                "amount": 4,
                "nap": 2
            },
            "previousHash": "5d806704ac38e2b6cc8cb1bcc5c84bbb1a1e645577d4da505732e24b55a7e83c",
            "nonce": 1435812,
            "hash": "0000003b5d1a015e53e55b3a8d61179967545d2a0a6dd9aeef5716cc497abbc8"
        },
        {
            "index": 2,
            "timestamp": "2018-08-08 18:29:36",
            "data": {
                "amount": 10
            },
            "previousHash": "0000003b5d1a015e53e55b3a8d61179967545d2a0a6dd9aeef5716cc497abbc8",
            "nonce": 113653,
            "hash": "00000220c6e021babcaae6ff002a9b18c4375e7ca058c05f2a692d4cc81a90f0"
        }
    ],
    "difficulty": 5
}
```
