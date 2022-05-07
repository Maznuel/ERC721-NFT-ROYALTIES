const fs = require("fs");
const { ethers } = require("hardhat")
async function main() {
    const [deployer] = await ethers.getSigners();
    const nft = await ethers.getContractFactory("NFT")
    const NFT = await nft.deploy()
    await NFT.deployed()
    console.log("Deployed from:", deployer.address);
    console.log("Token address:", NFT.address);

}
  
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });