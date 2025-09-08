import { ethers } from "hardhat";

export async function main() {
    const factory = await ethers.getContractFactory("Mtk");
    const mtk = await factory.deploy();
    
    await mtk.waitForDeployment();
    const address = await mtk.getAddress();
    console.log(address)
}

main().catch((error) => {
    console.log("Error", error);
    process.exit(1);
})