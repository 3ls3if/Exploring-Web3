require ('dotenv').config();
const {ethers} = require("ethers")


const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/<infura api key>');


const inspectBlock = async ()=> { 
        const blockNumber = await provider.getBlockNumber()
	console.log(`Block# ${blockNumber}\n`)

	const blockInfo = await provider.getBlock(blockNumber)
	console.log(`BlockInfo#`)
	console.log(blockInfo)

	inspectTransaction(blockNumber)
}

const inspectTransaction = async(blockNumber)=> {
	const {transactions} = await provider.getBlockWithTransactions(blockNumber)
	
	transactions.forEach(function(transaction){
		console.log(transaction.hash)
		console.log(transaction.to)
	})
	//console.log(transactions[0])
}


inspectBlock()
