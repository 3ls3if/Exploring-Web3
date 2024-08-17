require ('dotenv').config();
const {ethers} = require("ethers")


const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io.infura.io/v3/<infura api key>');

const doSomething = async ()=> {
	const myVariable = await provider.somefunction()
}

doSomething()





