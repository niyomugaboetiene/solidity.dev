import Hardhat from "hardhat";
const { ethers } = Hardhat;

export async function main() {
    const Variables = await ethers.getContractFactory("MyContract");
    const variables = await Variables.deploy();
    await variables.deployed();
    
    console.log("Variable contract deployed to:",variables.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1
});