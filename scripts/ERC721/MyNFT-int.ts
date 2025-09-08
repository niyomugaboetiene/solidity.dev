import { MyNFT } from "../../typechain-types";
import { ethers } from "hardhat";

export async function main() {
    const Address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const factory = await ethers.getContractFactory("MyNFT");
    const myNft = factory.attach(Address) as MyNFT;


    const tx = await myNft.MintNFT("0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec");
    tx.wait();

    console.log("Amount minted successfully to this address");
}

main().catch((error) => {
    console.error("ERROR:", error);
    process.exit(1);
});