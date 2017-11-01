

var tokenContractsAbi =[{"constant":false,"inputs":[{"name":"account","type":"address"},{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"}];
var tokenContractsBin ="0x"+"6060604052341561000f57600080fd5b60008054600160a060020a033316600160a060020a03199091161790556101f78061003b6000396000f300606060405263ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663867904b48114610052578063a9059cbb14610076578063f8b2cb4f1461009857600080fd5b341561005d57600080fd5b610074600160a060020a03600435166024356100c9565b005b341561008157600080fd5b610074600160a060020a0360043516602435610106565b34156100a357600080fd5b6100b7600160a060020a03600435166101b0565b60405190815260200160405180910390f35b60005433600160a060020a039081169116146100e457600080fd5b600160a060020a03909116600090815260016020526040902080549091019055565b600160a060020a0333166000908152600160205260409020548190101561012c57600080fd5b600160a060020a03338181166000908152600160205260408082208054869003905592851681528290208054840190557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef918490849051600160a060020a039384168152919092166020820152604080820192909252606001905180910390a15050565b600160a060020a0316600090815260016020526040902054905600a165627a7a72305820b16ddcb7486ff710a72cd56c81437d40ac8e94b2ae883f360742563770bf71940029";
var contract = web3.eth.contract(tokenContractsAbi);
var initializer = {from: web3.eth.accounts[0], data: tokenContractsBin, gas: 300000};
var token = contract.new(initializer,function(){console.log("token contract success")});
