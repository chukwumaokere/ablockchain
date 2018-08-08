# This is just a test I created for understanding how Blockchains work (relative to cryptocurrency)

# Test Run Results
## Trial 1
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
### Took about 31 seconds to mine block 1 at difficulty 5

## Trial 2
```bash
blockchaintest# node main.js 
Mining block 1...
Block mined: 000008a6cbf7d35d06128cc582babf14a70a9a0aaeb417cdcf2f361b1238e0ca
Mining block 2...
Block mined: 000002e10ce4d66f1b7c5f8cf50eaf9a16235ae4cc29d2a151027d2cc264718f
{
    "chain": [
        {
            "index": 0,
            "timestamp": "2018-08-08 18:52:00",
            "data": "Genesis Block",
            "previousHash": "0",
            "nonce": 0,
            "hash": "1c740b0ef904cc49aec9bb47ee7d4eacfc3485f5aa24400546aca48710b399ca"
        },
        {
            "index": 1,
            "timestamp": "2018-08-08 18:52:00",
            "data": {
                "amount": 4,
                "nap": 2
            },
            "previousHash": "1c740b0ef904cc49aec9bb47ee7d4eacfc3485f5aa24400546aca48710b399ca",
            "nonce": 2777082,
            "hash": "000008a6cbf7d35d06128cc582babf14a70a9a0aaeb417cdcf2f361b1238e0ca"
        },
        {
            "index": 2,
            "timestamp": "2018-08-08 18:52:59",
            "data": {
                "amount": 10
            },
            "previousHash": "000008a6cbf7d35d06128cc582babf14a70a9a0aaeb417cdcf2f361b1238e0ca",
            "nonce": 167025,
            "hash": "000002e10ce4d66f1b7c5f8cf50eaf9a16235ae4cc29d2a151027d2cc264718f"
        }
    ],
    "difficulty": 5
}
```
### Took about 1 minute to mine block 1 at difficulty 5
