const Web3 = require('web3')
var web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/<infura api key>'))

var txHash = "0x219997c017690284837c55246fc47e3a688588daf4165f1cef8d148b477fef85"

web3.eth.getTransaction(txHash, function(error, result){

	if(error){
		console.log(error)
	}
	else{
		console.log(result)
	}
})
