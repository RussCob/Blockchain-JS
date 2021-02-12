//import constructer function 
const Blockchain = require('./blockchain');

//1-------------------------------------
// //create for exmp btc instant for blockchain
// const bitcoin = new Blockchain();
// // testing our block method
// bitcoin.createNewBlock(2389, '09AJHDF2834', '52SAKBDIC723G2')
// //testing our chain
// console.log(bitcoin);
//-----------------------------

//2--------------------------
// //Testing our transaction
// const bitcoin = new Blockchain();
// bitcoin.createNewBlock(2389, '09AJHDF2834', '52SAKBDIC723G2');
// bitcoin.createNewTransactions(100, 'ALEX89nkend0932', 'JENNNUUNSAKBDIC723G2');

// console.log(bitcoin);
//------------------------------

//3-----------------------------
//testing our hash block
// const bitcoin = new Blockchain();
// const previousBlockHash = '092872jhadsbj'
// const currentBlockData  = [
//     {
//     amount: 10,
//     sender: 'Nancy2763gdkdnk',
//     recipient: 'John17fqsdbb12'
// },
// {
//     amount: 343,
//     sender: 'Jebb2763gdkdnk',
//     recipient: 'Karim17fqsdbb12'
// },
// {
//     amount: 2467,
//     sender: 'Russ2763gdkdnk',
//     recipient: 'Tommy17fqsdbb12'
// }
// ];
// const nonce = 100;

// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
//----------------------------------

//4---------------------------------
// //test proof of work
// const bitcoin = new Blockchain();
// const previousBlockHash = '092872jhadsbj'
// const currentBlockData  = [
//     {
//     amount: 10,
//     sender: 'Nancy2763gdkdnk',
//     recipient: 'John17fqsdbb12'
// },
// {
//     amount: 343,
//     sender: 'Jebb2763gdkdnk',
//     recipient: 'Karim17fqsdbb12'
// },
// {
//     amount: 2467,
//     sender: 'Russ2763gdkdnk',
//     recipient: 'Tommy17fqsdbb12'
// }
// ];

// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData,7595));
//------------------------------

//5------------------------------
// //test genesis block
// const bitcoin = new Blockchain();

// console.log(bitcoin);
//--------------------------------
//6-------------------------------
//