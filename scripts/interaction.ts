import { ethers } from "hardhat";
import { MyContract } from "../typechain-types";
import { uptime } from "process";

async function main() {
    const Address = "MY_ADDRESS";

    const factory = ethers.getContractFactory("MyContract");
    const contract = (await factory).attach(Address) as MyContract;

    const initial = await contract.getNumber();
    console.log("Initial number", initial.toString());

    // ? set Number
    const tx = await contract.setNumber(45);
    await tx.wait();

    const updated = await contract.getNumber();

    console.log("updated number", updated.toString());

}