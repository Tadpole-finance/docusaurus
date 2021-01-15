---
id: interest-model
title: Interest Model
---

For each asset, there is an interest index. We effectively track the growth of principal of an
arbitrary account over time. We use the ratio of that account's interest versus initial principal
to calculate the growth of any given account's interest over a subset of that time interval. The
interest model contract specifies the simple interest rate at any moment (which, when
compounded for each transaction becomes tadpole interest). We force this interest rate
model to be a pure function over the cash, borrows, and reserves of an asset in the market.

For more information, see this Interest Index Calculation Appendix:


borrowRate(address cToken, amount cash, amount borrows, amount reserves) returns uint


* Return the current interest rate for the market
* Note: cToken is the Compound cToken contract, not the underlying asset address.
