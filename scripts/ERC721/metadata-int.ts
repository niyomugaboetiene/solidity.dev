import { ethers } from "hardhat";
import { MyNFTMetadata } from "../../typechain-types";

export async function main()  {
    const address = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
    const factory = await ethers.getContractFactory("MyNFTMetadata");
    const metadata = await factory.attach(address) as MyNFTMetadata;

    const tx = await metadata.mintNFT("0xFABB0ac9d68B0B445fB7357272Ff202C5651694a", "https://maroon-abundant-marlin-479.mypinata.cloud/ipfs/bafkreifzu7aayvmpprirwuiowmcpnei4cinrjvp3rhempk3ktm2chd2oqm");
    tx.wait();
    console.log("Minted succeffully");

    const tokenId = 0;
    const metadataURI = await metadata.tokenURI(tokenId);

    console.log("Metadata URI:", metadataURI);
}

main().catch((error) => {
    console.error("ERROR:", error);
    process.exit(1);
})