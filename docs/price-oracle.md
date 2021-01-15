---
id: price-oracle
title: Price Oracle
---
The Tadpole Protocol uses prices from a smart contract called a price oracle. The
Comptroller and Liquidate Borrow functions reference the prices in this oracle. Multiple
oracles may exist for the different Tadpole markets.

getUnderlyingPrice( CToken cToken) returns uint

* Return price of the underlying asset (as a mantissa)

Get cryptographically signed prices ready to be posted on-chain using [Open Oracle](https://github.com/compound-finance/open-oracle) smart contracts.

## HTTP REQUEST

GET /oracle

## API KEY PERMISSIONS

This endpoint requires the “view” permission and is accessible by any profile’s API key.

## DETAILS

* timestamp field indicates when the latest datapoint was obtained.
* messages array contains abi-encoded values [kind, timestamp, key, value], where kind always equals to 'prices', timestamp is the time when the price was obtained, key is asset ticker (e.g. 'eth') and value is asset price.
* signatures is an array of Ethereum-compatible ECDSA signatures for each message.
* prices contains human-readable asset prices.

## Decoding Messages

Messages can be decoded using the Open Oracle [Reporter](https://github.com/compound-finance/open-oracle/tree/master/sdk/javascript) JavaScript library.

Each message encodes values [kind, timestamp, key, value], where kind always equals to 'prices', timestamp is the time when the price was obtained, key is asset ticker (e.g. 'eth') and value is a 6-decimal precision encoded price.

## Recovering Signatory

The public key used to produce a signature can be directly obtained from the signature and the corresponding message. The signature format is Web3 and EVM / Solidity -friendly.


## * Tadpole Finance Oracle Public key is: (TBA)
