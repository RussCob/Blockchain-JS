// creating blockchain

//import sha256
const sha256 = require('sha256');
//constructer function
function Blockchain() {
    //our blockchain will be store here
    this.chain = [];
    //hold all new transaction created
    this.pendingTransactions = [];
    //genesis(first block) block (nonce,prevblockhash,hash)
    this.createNewBlock(100, "0", "0");
}
//---------------------------------------
// // This one alternative using with class function but we don't get use it
// class Blockchain {
//     constructer(){
//         this.chain = [];
//         this.pendingTransactions = [];

//     }
// }
//----------------------------------------------

//Create a new block
//using method and it's gonna take 3 parametrs
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash,hash){
    //create a new block object
    const newBlock = {
        //block inside our chain, inside our blockcahin
        //block number
        index: this.chain.length + 1,
        //time stamp
        timestamp: Date.now(),
        //all new and pending transaction
        transaction: this.pendingTransactions,
        //in this case proff of work 
        nonce : nonce,
        // data from our data(all transaction going to one string)
        hash: hash,
        // data for previous block this is very similar to hash string
        previousBlockHash: previousBlockHash

    };

    // start over for the next block puting array
    this.pendingTransactions = [];
    //push in the chain
    this.chain.push(newBlock);

    //return a new block method
    return newBlock;

}

//get last block
Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length  - 1];
}

//create new transaction method
Blockchain.prototype.createNewTransactions = function(amount, sender, recipient){
    const newTransactions = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };

    //push new transaction to our transaction
    this.pendingTransactions.push(newTransactions);

    // number of the block
    return this.getLastBlock()['index'] + 1;
}

//sha256 hashblock method // making a string
Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce){
    //.. return '90KASFDAY78234SDB'
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;

}

//starting 0000 then pass hash// proof of work method
Blockchain.prototype.proofOfWork =function(previousBlockHash, currentBlockData){
    //if it doesn't start 0000 then run again
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    while (hash.substring(0,4) !== '0000') {
        nonce++;
        hash =this.hashBlock(previousBlockHash,currentBlockData,nonce);
    }

    return nonce;

    
}


//export contructer function
module.exports = Blockchain;