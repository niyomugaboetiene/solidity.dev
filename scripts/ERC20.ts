import { ethers } from "hardhat";

export async function main() {
    const factory = await ethers.getContractFactory("MyTokens");
    const myTokens = await factory.deploy();
    
    await myTokens.waitForDeployment();
    
    const address = await myTokens.getAddress();
    console.log("Address", address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1)
})