import { ethers } from "hardhat";

export async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNft = await MyNFT.deploy();

     await myNft.waitForDeployment();

    const address = await myNft.getAddress();

    console.log("Deployed to: ", address);
}

main().catch((error) => {
    console.error(error.message);
    process.exit(1);
})