import { ReminderPractice } from "../../typechain-types";
import { ethers } from "hardhat";

export async function main() {
    const address = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
    const factory = await ethers.getContractFactory("ReminderPractice");
    const interaction = await factory.attach(address) as ReminderPractice;

    const tx = await interaction.mintNft("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E", "https://maroon-abundant-marlin-479.mypinata.cloud/ipfs/bafkreifzu7aayvmpprirwuiowmcpnei4cinrjvp3rhempk3ktm2chd2oqm");
    tx.wait();

    const tokenId = 0;
    const deployer = await interaction.tokenURI(tokenId);
    console.log("Deployer Address:", deployer);

}

main().catch((error) => {
    console.error("ERROR:", error)
})