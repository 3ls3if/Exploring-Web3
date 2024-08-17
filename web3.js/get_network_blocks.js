
const Web3 = require('web3')
var web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/<infura api key>'))

//get block numbers

web3.eth.subscribe('newBlockHeaders').on('data', async block => {
    console.log(`Block#: ${block.number}`);
}).on('error', error => {
    console.log(error);
})


