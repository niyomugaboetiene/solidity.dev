import { ethers } from "hardhat";
// type that describe that describes what function exit on it
import { MyContract } from "../typechain-types";

async function main() {
    const Address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    const factory = ethers.getContractFactory("MyContract");
    // allow my ts code to intract with my contract like call its functions, ...
    const contract = (await factory).attach(Address) as MyContract;

    // call getNum function that belongs on contract 
    const initial = await contract.getNumber();
    console.log("Initial number", initial.toString());

    // ? set Number
    const tx = await contract.setNumber(45);
    // wait for confrimation
    await tx.wait();

    const updated = await contract.getNumber();

    console.log("updated number", updated.toString());

}
main().catch(console.error)