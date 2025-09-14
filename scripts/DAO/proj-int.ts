import { ethers } from "hardhat";
import { DAO } from "../../typechain-types";

export async function main() {
    const address = "0x59b670e9fA9D0A427751Af201D676719a970857b";
    const factory = await ethers.getContractFactory("DAO");
    const dao =  factory.attach(address) as DAO;

    // const createProposals = await dao.CreateProposal("Fund project");
    // createProposals.wait();

    // if (createProposals) {
    //      console.log("DAO Created successfully");
    // }

    // const vote = await dao.Vote(0);
    // vote.wait();

    // if (vote) {
    //     console.log("Voted successuflly");
    // }

    const execute = await dao.execute(0);
    execute.wait();

    if (execute) {
        console.log("Executed successfully !!");
    }

}

main().catch((error) => {
    console.error("ERROR:", error);
});