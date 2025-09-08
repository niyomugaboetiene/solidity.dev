import { ethers } from "hardhat";

export async function main () {
     const factory = await ethers.getContractFactory("ReminderPractice");
     const reminder = await factory.deploy();

     await reminder.waitForDeployment();
     const address = await reminder.getAddress();

     console.log("Address", address);
}

main().catch((error) => {
    console.error("ERROR: ", error)
})