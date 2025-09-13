import { ethers } from "hardhat";

export async function main() {
    const factory = await ethers.getContractFactory("SimpleDAO");
    const dao = await factory.deploy();
    
    await dao.waitForDeployment();
    const address = await dao.getAddress();
    console.log("Address: ", address);
}

main().catch((error) => {
    console.error("ERROR: ", error);
});
