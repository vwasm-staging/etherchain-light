var web3 = require('web3');
var net = require('net');

var config = function (endpoint) {

  this.logFormat = "combined";
  this.provider = new web3.providers.HttpProvider(endpoint);

  //this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css";
  this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/paper/bootstrap.min.css";

  this.names = {
    "0x9fa4f23079bae7a7a5c392b67e18093310315bfc": "ewasm Faucet",
    "0xa8C3eEb2915373139bcfc287D4ae9E660d734881": "ewasm miner",
    "0x000000000000000000000000000000000000000a": "sentinel contract",
    "0x000000000000000000000000000000000000000b": "evm2wasm contract"
  }

}

module.exports = config;
