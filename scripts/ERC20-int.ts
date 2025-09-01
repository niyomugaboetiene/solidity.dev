import { ethers } from "hardhat";
import { MyTokens } from "../typechain-types";

export async function main () {

    const Address = "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1";
    const factory = await ethers.getContractFactory("MyTokens");
    const mytoken = factory.attach(Address) as MyTokens;

    // const transfer = await mytoken.transfer("0xcd3B766CCDd6AE721141F452C550Ca635964ce71", 20);
    // transfer.wait()
    // console.log("Transfered 20 tokens!!");

    const checkBalance = await mytoken.checkBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    console.log("Balance:", checkBalance.toString());

    await mytoken.burn(20);
    console.log("20 token burned");

    await mytoken.giveToken("0x70997970C51812dc3A010C7d01b50e0d17dc79C8", 40);
    console.log("You give 40 tokens to spender!!");

    const checkSpenderBalance = await mytoken.checkAllowance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "0x70997970C51812dc3A010C7d01b50e0d17dc79C8");
    console.log("Spender Balance", checkSpenderBalance.toString());

    
}

main().catch((error) => {
    console.error(error);
})