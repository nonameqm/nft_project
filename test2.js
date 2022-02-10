//how to use gnache
var Web3 = require('web3');

var web3 = new Web3('http://127.0.0.1:7545');

web3.eth.getBalance('0x594FCDD873331Ffc3a12251322A6De60D65fbcC0', (error, wei)=>{
    let balance = web3.utils.fromWei(wei, 'ether');
    console.log(balance);
})