#!/bin/bash
geth=${GETH:-geth}
nohup $geth --unlock 0 --password ./bin/password --datadir data --networkid 61008596 --ws --wsport 4046 --wsorigins '*' --rpc --rpcaddr "0.0.0.0" --rpcport 4045 --rpcapi="db,eth,net,web3,personal,web3,miner,debug" --rpccorsdomain '*' --nodiscover &
