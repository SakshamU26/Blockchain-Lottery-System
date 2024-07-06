const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const {interface, bytecode} = require('./Compile.js');

const provider = new HDWalletProvider(
	// 'defy wave second park guide exhaust vacuum quick define rookie sphere trip',
	'heavy fly like vivid dust mirror antique ocean honey limb vibrant coil',
	'https://mainnet.infura.io/v3/369490a637714b28a1d1d92e2a3f51de'
);



const web3 = new Web3(provider);

const deploy = async () => {
	const accounts =  await web3.eth.getAccounts();

	console.log('deploying from ', accounts[0]);

	const ABI = interface;

	const deployedContract = await new web3.eth.Contract(JSON.parse(ABI))
	.deploy({data: bytecode})
	.send({
	  gas: '1000000',
	  from: accounts[0]
	});
	console.log('contract deployed to', deployedContract.options.address);
}

deploy();
