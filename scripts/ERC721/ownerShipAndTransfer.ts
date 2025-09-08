import { ethers } from "hardhat";

export async function main() {
   const factory = await ethers.getContractFactory("Transfer");
   const transfer = await factory.deploy();
   
   await transfer.waitForDeployment();

   const address = await transfer.getAddress();
   console.log("Address:", address);
}

main().catch((error) => {
    console.error("ERROR:", error);
})