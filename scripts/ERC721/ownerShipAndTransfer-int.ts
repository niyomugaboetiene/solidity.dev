import { Transfer } from "../../typechain-types";
import { ethers } from "hardhat";

export async function main() {
    const address = "0xa82fF9aFd8f496c3d6ac40E2a0F282E47488CFc9";
    const factory = await ethers.getContractFactory("Transfer");
    const interaction = factory.attach(address) as Transfer;
    const tx = await interaction.mintNFT("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "https://maroon-abundant-marlin-479.mypinata.cloud/ipfs/bafkreifzu7aayvmpprirwuiowmcpnei4cinrjvp3rhempk3ktm2chd2oqm");
    tx.wait();

    console.log("Minted successfully");
    
    const wallet = "0xdD2FD4581271e230360230F9337D5c0430Bf44C0";
    const balance = await interaction.balanceOf(wallet);
    console.log(`Balance of ${wallet} is ${balance.toString()}`);

    // const transfer = await interaction.transfer("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "0xdD2FD4581271e230360230F9337D5c0430Bf44C0", 1);
    // transfer.wait();
    // console.log("Amount transfered successfully !!");
}

main().catch((error) => {
  console.error("ERROR:", error);
  process.exit(1);
})