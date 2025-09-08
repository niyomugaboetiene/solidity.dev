import { Transfer } from "../../typechain-types";
import { ethers } from "hardhat";

export async function main() {
    const address = "0x0B306BF915C4d645ff596e518fAf3F9669b97016";
    const factory = await ethers.getContractFactory("Transfer");
    const interaction = factory.attach(address) as Transfer;
    const tx = await interaction.mintNFT("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", "https://maroon-abundant-marlin-479.mypinata.cloud/ipfs/bafkreifzu7aayvmpprirwuiowmcpnei4cinrjvp3rhempk3ktm2chd2oqm");
    tx.wait();

    console.log("Minted successfully");

    const transfer = await interaction.transfer("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", 0);
    transfer.wait();
    console.log("Amount transfered successfully !!");
}

main().catch((error) => {
  console.error("ERROR:", error);
  process.exit(1);
})