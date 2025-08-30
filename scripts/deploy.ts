import { ethers } from "hardhat";
import { MyContract } from "../typechain-types";

export async function main() {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = (await MyContract.deploy()) as MyContract;

    await myContract.deployed();
    
    console.log("Variable contract deployed to:", myContract.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});