require ('dotenv').config();
const {ethers} = require("ethers")


const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io.infura.io/v3/<infura api key>')

const getPending = async ()=> {
        provider.on("pending", async (txhash) => {
		const transaction = await provider.getTransaction(txhash)
		
		if(transaction != null){
			gasprice = transaction.gasPrice
			convertedPrice = ethers.utils.formatEhter(gasprice)
			console.log(`Confirmation: ${transaction.confirmations}\n Hash: ${transaction.hash}\n ${convertedPrice}\n ${gasprice}\n`)
		}
	})
}

getPending()
