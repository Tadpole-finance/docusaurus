---
id: universal-bridge
title: Universal Bridge
---

## What is Universal Bridge?

Universal Bridge is a tool provided by Tadpole Finance to facilitate its users in creating a ERC20 to BEP20 token bridge. With the Universal Bridge, users can create a BEP20 version of an ERC20 token, and transfer the tokens back and forth between Ethereum and BSC network. The tool is created to make it easier for developers who already has a ERC20 token on Ethereum to move to BSC.

The tool is located at https://app.tadpole.finance/universalbridge.html

## Converting TAD Tokens
To convert TAD tokens, type "TAD" into the search box and click on the TAD option. The real TAD token can be identified with the TAD logo.

## Creating a new Token Bridge

To create a new Token Bridge, first you will need to input the ERC20 token address to the provided search box. After that, two boxes will show up, each showing the token details of the ERC20 and BEP20 version of the token. If the Token Bridge is not created yet, you will need to create it first. 10 TAD will be burned in the process of creating a new bridge.

![Create new token bridge](/img/universalbridge/createNewBridge.jpeg)

After the transaction is confirmed, a new BEP20 token will be created and users will be able to use the bridge to convert their ERC20 tokens to BEP20, and vice versa. 

Note: The Bridge does not support rebase or reflection type tokens. Please avoid using the bridge for those type of tokens.

## Converting ERC20 to BEP20

To convert ERC20 to BEP20, input the amount that you want to convert in the input field in the left box, and click "Convert to BEP20". Please note that the contract will request your approval to transact the tokens on your behalf, and this is only required when converting for the first time.

![Convert to BEP20](/img/universalbridge/convertToBep20.jpeg)

After the transaction is confirmed, wait for a few minutes until a new entry appears on the bottom side of the page. You can then do another transaction to claim your BEP20 tokens in BSC network. Remember to switch your Metamask network to BSC first before claiming BEP20.

![Claim BEP20](/img/universalbridge/claimBep20.jpeg)

## Converting BEP20 to ERC20

To convert BEP20 back to ERC20, input the amount that you want to convert in the input field in the right box, and click "Convert to ERC20".

![Convert to ERC20](/img/universalbridge/convertToErc20.jpeg)

After the transaction is confirmed, wait for a few minutes until a new entry appears on the bottom side of the page. You can then do another transaction to claim your ERC20 tokens in Ethereum network. Remember to switch your Metamask network to Ethereum first before claiming ERC20.

![Claim ERC20](/img/universalbridge/claimErc20.jpeg)

## Creating custom URL for a specific token

You can add a tokenAddress querystring parameter to the URL to automatically open the bridge for a specific ERC20 token upon page load. For example: https://app.tadpole.finance/universalbridge.html?tokenAddress=0xF791df8cE12FeECa6165dd11f99747195FC4FF11















