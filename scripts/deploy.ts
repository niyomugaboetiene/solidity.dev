import { ethers } from "hardhat";

export async function main() {
    const factory = await ethers.getContractFactory("MyTokens");
    const myToken = (await factory.deploy());

    await myToken.waitForDeployment();
   const address = await myToken.getAddress();
    console.log("Variable contract deployed to:", address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});