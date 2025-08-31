import { ethers } from "hardhat";
import { MyTokens } from "../typechain-types";

export async function main () {

    const Address = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
    const factory = await ethers.getContractFactory("MyTokens");
    const mytoken = factory.attach(Address) as MyTokens;

    const transfer = await mytoken.transfer("0xcd3B766CCDd6AE721141F452C550Ca635964ce71", 20);
    transfer.wait()
    console.log("Transfered 20 tokens!!");
}

main().catch((error) => {
    console.error(error);
})