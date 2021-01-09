---
id: methods
title: Smart Contract Methods
---

We detail a few of the core contracts in the Tadpole protocol.

## CToken, CErc20 and CEther

The Tadpole cTokens, which are self-contained borrowing and lending contracts. CToken contains the core logic and CErc20 and CEther add public interfaces for Erc20 tokens and ether, respectively. Each CToken is assigned an interest rate and risk model (see InterestRateModel and Comptroller sections), and allows accounts to *mint* (supply capital), *redeem* (withdraw capital), *borrow* and *repay a borrow*. Each CToken is an ERC-20 compliant token where balances represent ownership of the market.

## Comptroller

The risk model contract, which validates permissible user actions and disallows actions if they do not fit certain risk parameters. For instance, the Comptroller enforces that each borrowing user must maintain a sufficient collateral balance across all cTokens.

## TAD

The Tadpole platform token. Holders of this token have the ability to govern the protocol via the governor contract. TAD is also used to pay the listing fees to add a new ERC-20 to the money markets.

## JumpRateModelV3

Contracts which define interest rate models. These models algorithmically determine interest rates based on the current utilization of a given market (that is, how much of the supplied assets are liquid versus borrowed).

## Careful Math

Library for safe math operations.

## ErrorReporter

Library for tracking error codes and failure conditions.

## Exponential

Library for handling fixed-point decimal numbers.

## SafeToken

Library for safely handling Erc20 interaction.

## CollateralModel

Contracts which define collateral rate models. Currently collateral rates are defined manually by admin. Our goal is to make CollateralModel which can determine collateral rates algorithmically based on various variables like the token's liquidity, volatility, etc.

## CTokenFactory

A contract factory to generate cToken. To add a new market into Tadpole, user send a request to Comptroller.createMarket() and it will call CTokenFactory to generate a new cToken smart contract into Ethereum network.

## PriceOracleV1

Simple price oracle before we move to a more complex oracle to support an open lending ecosystem.
