//how to get account info
var Web3 = require('web3');
var url = 'https://mainnet.infura.io/v3/bb856b3df4cc45cc9ad8e50500da46df';
var web3 = new Web3(url);
var balance
var address = '0xDA9dfA130Df4dE4673b89022EE50ff26f6EA73Cf';

web3.eth.getBalance(address, (err, bal)=>{
    balance=web3.utils.fromWei(bal, 'ether');
    console.log(balance);
});



