#!/bin/bash
geth=${GETH:-geth}
$geth --datadir data --networkid 61008596 --rpc --rpccorsdomain "*" init ./genesis.json
