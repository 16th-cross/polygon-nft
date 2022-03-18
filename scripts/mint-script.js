const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("FrictionlessNFT");
  const URI = "ipfs://NFTCID"
  const CONTRACT_ADDRESS = "ADD_CONTRACT_ADDRESS"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const tokenID = await contract.mint(URI);
  console.log("NFT minted:", contract);
  console.log("TOKENID: ", tokenID);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});