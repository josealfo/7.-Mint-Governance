const { ethers } = require("hardhat");
require('dotenv').config();

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_GOERLI_URL);
  const privateKey = process.env.GOERLI_PRIVATE_KEY;
  
  const myGovernorArtifacts = await hre.artifacts.readArtifact("MyGovernor");
  const myGovernorAddress = "0xB26EBf91c820648dC08f8a62C395FfBe3CD70824";
  const myAddress = "0x12ff0e981701eA0747058C64936224B8deFCe185";

  const proposalId = "8842307623172503925739971616343303302885434907285956958556601970005526381868"; 

  let wallet = new ethers.Wallet(privateKey, provider);

  let myGovernorContract = new ethers.Contract(myGovernorAddress, myGovernorArtifacts.abi, wallet);

  const tx = await myGovernorContract.castVote(proposalId, 1);    

  console.log("Voted successfully... voting ends in one week");
  /* This script provided the following output:

*/
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
