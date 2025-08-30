import { ethers } from "hardhat";

export async function main() {
    const factory = await ethers.getContractFactory("MyContract");
    const myContract = (await factory.deploy());

    await myContract.deployed();
    
    console.log("Variable contract deployed to:", myContract.addres);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});