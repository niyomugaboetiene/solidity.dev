const { ethers } = require("hardhat");

const tokenAddress = "0xE37fBADBaEE85b96f44B0dAeb9044E5cE79C924e";
const tokenABI = [
    "function name() view returns(string)",
    "function symbol() view returns(string)",
    "function decimals() view returns (uint8)",
    "function balanceOf(address) view reurns(uint256)",
    "function transfer(address to, uint256 amount) returns (bool)",
    "function mint(address to, uint256 amount) returns (bool)",
    "function burn(uint256 to)",
    "function approve(addrees spender, uint256 amount) returns(bool)"
];

let provider;
let signer;
let contract;

document.getElementById("connect").onclick = async () => {
    if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        contract = new ethers.Contract(tokenAddress, tokenABI, signer);
        const account = await signer.getAddress();
        document.getElementById("account").innerText = "Connected" + account;
    } else {
        alert("MetaMask not detected!!");
    }
};

// send tokens
document.getElementById("send").onclick = async () => {
    const to = document.getElementById("recipient").value;
    const amount = ethers.parseUnits(document.getElementById("amount").value, 18)
    const tx = await contract.transfer(to, amount)
    await tx.wait();
    alert("Token sent!!");
};

// mint token
document.getElementById("burn").onclick = async () => {
    const amount = ethers.parseUnits(document.getElementById("burnAmount").value, 18);
    const tx = await contract.burn(amount);
    await tx.wait();
    alert("Burned tokens !!");
};

// mint token
document.getElementById("mint").onclick = async () => {
    const amount = ethers.parseUnits(document.getElementById("mintAmount").value, 18);
    const tx = await contract.mint(await signer.getAddress(), amount);
    await tx.wait();
    alert("Minted tokens !!");
}

// approve spender
document.getElementById("approve").onclick = async () => {
    const spender = document.getElementById("spender").value;
    const amount = ethers.parseUnits(document.getElementById("approveAmount").value, 18);
    const tx = await contract.approve(spender, amount);
    await tx.wait();
    alert("Spender approved!!");
} 
