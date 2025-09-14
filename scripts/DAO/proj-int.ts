import { ethers } from "hardhat";
import { DAO } from "../../typechain-types";

export async function main() {
    const address = "0x09635F643e140090A9A8Dcd712eD6285858ceBef";
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
 
    // const [_description, voteCount, executed] = await dao.getProposal();
    // for (let i = 0; i < _description.length; i ++) {
    //     console.log(_description[i], voteCount[i], executed[i]);
    // }
}

main().catch((error) => {
    console.error("ERROR:", error);
});