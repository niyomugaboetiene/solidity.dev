import { ethers } from "hardhat";
import { MyTokens } from "../typechain-types";

export async function main () {

    const Address = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";
    const factory = await ethers.getContractFactory("MyTokens");
    const mytoken = factory.attach(Address) as MyTokens;

    // const transfer = await mytoken.transfer("0xcd3B766CCDd6AE721141F452C550Ca635964ce71", 20);
    // transfer.wait()
    // console.log("Transfered 20 tokens!!");

    const checkBalance = await mytoken.checkBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    console.log("Balance:", checkBalance.toString());

    await mytoken.burn(20);
    console.log("20 token burned");

}

main().catch((error) => {
    console.error(error);
})