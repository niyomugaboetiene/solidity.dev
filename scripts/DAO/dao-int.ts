import { ethers } from "hardhat";
import { SimpleDAO } from "../../typechain-types";

export async function main() {
    const address = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
    const factory = await ethers.getContractFactory("SimpleDAO");
    const dao = factory.attach(address) as SimpleDAO;

    // const tx = await dao.createProposal("Fund community project");
    // tx.wait();
    // if (tx) {
    //     console.log("DAO created successfully !!");
    // }

    // const tx = await dao.vote(0);
    // tx.wait();
    // if (tx) {
    //     console.log("You voted successfully");
    // }

    // const tx = await dao.execute(0);
    // tx.wait();
    // console.log("Executed !!", tx);

    // ? get proposals
    const  [ description, voteCount, executed ] = await dao.getProposal();
    for (let i = 0; i < description.length; i ++) {
        console.log(description[i], voteCount[i].toString(), executed[i])
    }
    
}

main().catch((error) => {
    console.error("ERROR:", error);
})