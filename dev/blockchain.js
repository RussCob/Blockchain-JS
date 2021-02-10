
function Blockchain() {
    this.chain = [];
    this.pendingTransactions = [];
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
    const newBlock = {
        index      : this.chain.length + 1,
        timestap   : Date.now(),
        transction : this.pendingTransactions,
        nonce      : nonce,
        hash       : hash,
        previousBlockHash : previousBlockHash
    };

    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;

}

Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
    const newTransaction = {
        amount    : amount,
        sender    : sender,
        recipient : recipient
    };

    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock()['index'] + 1;
}

Blockchain.prototype.hashBlock = function(blockData) {

    // ... return '9034563434sddfuabu3b4ub' (SHA256 Hash Generator)
}


module.exports = Blockchain;