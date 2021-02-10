const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(4289, '0INA90SDNF90N', '90ANSD9F0N90N');

bitcoin.createNewTransaction(100, 'ALEX89AJHBD564', 'JENN0US3623JG2334');

bitcoin.createNewBlock(12673, '0DSKS8723HLS', 'HK782363KHDSK');

bitcoin.createNewTransaction(10, 'ALEX89AJHBD564', 'JENN0US3623JG2334');
bitcoin.createNewTransaction(200, 'ALEX89AJHBD564', 'JENN0US3623JG2334');
bitcoin.createNewTransaction(3000, 'ALEX89AJHBD564', 'JENN0US3623JG2334');

bitcoin.createNewBlock(8224, '0DSKS8723HLS', 'HK782363KHDSK');

console.log(bitcoin.chain[2]);