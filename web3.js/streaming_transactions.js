const Web3 = require('web3')
var web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/<infura api key>'))

web3.eth.subscribe('pendingTransactions')
.on('data', async transaction => {
	web3.eth.getTransaction(transaction, function(error, result){

        if(error){
                console.log(error)
        }
        else{
                console.log(result)
        }
})
})


