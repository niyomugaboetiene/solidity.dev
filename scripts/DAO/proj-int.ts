import { ethers } from "hardhat";
import { DAO } from "../../typechain-types";

export async function main() {
    const address = "0x0165878A594ca255338adfa4d48449f69242Eb8F";
    const factory = await ethers.getContractFactory("DAO");
    const dao =  factory.attach(address) as DAO;

    const tx = await dao.CreateProposal("Fund project");
    tx.wait();

    if (tx) {
         console.log("DAO Created successfully");
    }
}

main().catch((error) => {
    console.error("ERROR:", error);
});