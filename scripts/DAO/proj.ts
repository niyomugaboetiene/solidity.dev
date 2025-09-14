import { ethers } from "hardhat";

export async function main() {
    const factory = await ethers.getContractFactory("DAO");
    const dao = await factory.deploy();

    dao.waitForDeployment();
    const address = await dao.getAddress();
    console.log("Address:", address);
}


main().catch((error) => {
    console.error("ERROR:", error);
})