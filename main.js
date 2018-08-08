/**********************************************************
TODO:
Need a mechanism that will check if:
1) A new block broke the chain
2) There is something wrong with the chain 

Needs a mechanism that will roll back changes and put chain back in a correct state

-Need proof-of-work
-Need p2p networking (Long-term)

**********************************************************/

//deprecated crypto methods for this project
//const crypto = require('crypto');
//const SHA256 = crypto.createHash('sha256');

//new crypto method
var SHA256 = require("crypto-js/sha256");

class Block {
	constructor(index, timestamp, data, previousHash = ''){
		this.index = index;
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = previousHash;
		this.nonce = 0;
		this.hash = this.calculateHash();
	}
	calculateHash(){
		//SHA526.on('readable', () => { const dat = SHA256.read(); if (dat) { console.log(dat.toString('hex')); } });
		/* Deprecated Crypto method */
		//return SHA256.on('readable', () => { if (this.data) { /* console.log(this.data.toString());*/  } });
		return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
	}
	mineBlock(difficulty){
		while(this.hash.substring(0, difficulty) !== Array(difficulty+1).join("0")){
			this.nonce++;
			this.hash = this.calculateHash();
		}
	console.log("Block mined: " + this.hash);
	}
}

class Blockchain {
	constructor(){
		this.chain = [this.createGenesisBlock()];
		this.difficulty = 5;
	}
	
	createGenesisBlock(){
		return new Block(0, "2018-08-07 17:15:02", "Genesis Block", "0");
	}
	
	getLatestBlock(){
		return this.chain[this.chain.length - 1];
	}

	addBlock(newBlock){ //This method should have some checks before adding the block
		newBlock.previousHash = this.getLatestBlock().hash;
		//newBlock.hash = newBlock.calculateHash();
		newBlock.mineBlock(this.difficulty);
		this.chain.push(newBlock);
	}
	
	//to verify the integretity of the chain
	isChainValid(){
		for(let i = 1; i < this.chain.length; i++){ //We'll loop through every chain in the block EXCEPT the genesis block which will always have index/key 0 
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i-1];
			
			if(currentBlock.hash !== currentBlock.calculateHash()){ //If the current blocks hash is not equal to the calculated hash based on our hashing function and the blocks properties (meaning it was falsely created)
				return false;
			}
		
			if(currentBlock.previousHash !== previousBlock.hash){ //if the current blocks previous hash is NOT equal to the actual blockchains previous block's hash then its falsely created
				return false;
			}
		}
		//if false hasnt been returned based on these two checks then the chain is valid
		return true;
	}
}


let newCoin = new Blockchain();

console.log('Mining block 1...');
newCoin.addBlock(new Block(1, new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''), {amount: 4})); 

console.log('Mining block 2...');
newCoin.addBlock(new Block(2, new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''), {amount: 10}));

console.log(JSON.stringify(newCoin, null, 4));
