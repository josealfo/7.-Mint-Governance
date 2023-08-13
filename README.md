# Mint Governance

Simple governance scripts and contracts, tested in hardhat, and later deployed to goerli. Solidity's smart contract was taken from an OpenZeppelin wizard, and configured for longer voting delay and voting periods, longer than those used in the local environment. Then I created scripts for delegating tokens, creating the proposal, voting, and executing it! This project was made for learning purposes.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
