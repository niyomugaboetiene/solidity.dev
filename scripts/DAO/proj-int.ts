import { ethers } from "hardhat";
import { DAO } from "../../typechain-types";

export async function main() {
    const address = "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0";
    const factory = await ethers.getContractFactory("DAO");
    const dao =  factory.attach(address) as DAO;

    const createProposals = await dao.CreateProposal("Fund project");
    createProposals.wait();

    if (createProposals) {
         console.log("DAO Created successfully");
    }

    // const vote = await dao.Vote(0);
    // vote.wait();

    // if (vote) {
    //     console.log("Voted successuflly");
    // }

    // const execute = await dao.execute(0);
    // execute.wait();

    // if (execute) {
    //     console.log("Executed successfully !!");
    // }

}

main().catch((error) => {
    console.error("ERROR:", error);
});