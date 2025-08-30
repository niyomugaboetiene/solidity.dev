import { ethers } from "hardhat";


export async function main() {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract: any = await MyContract.deploy();

    await myContract.deployed();
    
    console.log("Variable contract deployed to:", myContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});