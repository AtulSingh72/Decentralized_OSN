const path = require('path')
const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const config = require('./config.json')
const fs = require('fs-extra')
const provider = new HDWalletProvider(
  config.provider.mnemonic,
  config.provider.rpc_server,
)
const web3 = new Web3(provider)
const compiledFactory = require('./build/PostFactory.json')

const configPath = path.resolve(__dirname)
let post_factory
let accounts

const deploy = async (config) => {
  accounts = await web3.eth.getAccounts()
  console.log(await web3.eth.getBalance(accounts[0]))

  post_factory = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface),
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '2000000' })
  config.PostFactoryAddress = post_factory.options.address
  console.log('Contract deployed at ', post_factory.options.address)
  fs.outputJSONSync(path.resolve(configPath, 'config.json'), config)
}

deploy(config)
