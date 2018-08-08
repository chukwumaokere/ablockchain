hash = '0c0e86dd35cf6a91f8ac07afd0f172eea893cb83243af805ab3f08dba734b4113';
nonce = 0;
difficulty = 2;

while(hash.substring(0, difficulty) !== Array(difficulty+1).join("c")){
			nonce++;
                        //hash = calculateHash();
			console.log(Array(difficulty+1).join("0"));
                }

/*
var what = Array(3).join("c");
console.log(what);
*/
