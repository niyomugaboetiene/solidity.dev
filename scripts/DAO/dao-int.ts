import { ethers } from "hardhat";
import { SimpleDAO } from "../../typechain-types";

export async function main() {
    const address = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
    const factory = await ethers.getContractFactory("SimpleDAO");
    const dao = await factory.attach(address) as SimpleDAO;

    const tx = await dao.createProposal("Fund community project");
    tx.wait();
    if (tx) {
        console.log("DAO created successfully !!");
    }
}

main().catch((error) => {
    console.error("ERROR:", error);
})