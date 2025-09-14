import { ethers } from "hardhat";
import { DAO } from "../../typechain-types";

export async function main() {
    const address = "0x0165878A594ca255338adfa4d48449f69242Eb8F";
    const factory = await ethers.getContractFactory("DAO");
    const dao =  factory.attach(address) as DAO;

    const createProposals = await dao.CreateProposal("Fund project");
    createProposals.wait();

    if (createProposals) {
         console.log("DAO Created successfully");
    }

    const vote = await dao.Vote(0);
    vote.wait();

    if (vote) {
        console.log("Voted successuflly");
    }
}

main().catch((error) => {
    console.error("ERROR:", error);
});