import { ethers } from "hardhat";

export async function main() {
    const factory = await ethers.getContractFactory("MyContract");
    const myContract = (await factory.deploy());

    await myContract.waitForDeployment();
   const address = await myContract.getAddress();
    console.log("Variable contract deployed to:", address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});