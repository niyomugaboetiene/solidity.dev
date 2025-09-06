const tokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const tokenABI = [
    "function transfer(address to, uint256 amount) returns (bool)",
    "function burn(uint256 amount) returns (bool)",
    "function giveToken(address spender, uint256 amount) returns(bool)",
    "function checkBalance(address account) view returns(uint256)",
    "function checkAllowance(address owner, address spender) view returns(uint256)",
    "function transferFrom(address from, address to, uint256 amount) returns(bool)"
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

const code = await provider.getCode(tokenAddress);
console.log("Contract Address", code);
// send tokens
document.getElementById("send").onclick = async () => {
    const to = document.getElementById("recipient").value;
    const amount = ethers.parseUnits(document.getElementById("amount").value, 18)
    const tx = await contract.transfer(to, amount)
    await tx.wait();
    alert("Token sent!!");
};

// Check balance
const checkBalanceBtn = document.getElementById("checkBalance");
if (checkBalanceBtn) {
    checkBalanceBtn.onclick = async () => {
        if (!contract) {
            alert("No metamask detected");
            return;
        } 

    const check = document.getElementById("checkAccount").value;
    try {
        const balance = await contract.checkBalance(check);
        document.getElementById("balance").innerText = ethers.formatUnits(balance, 18);
    } catch (error) {
        console.error("Balance check error:", error);
        alert("Error in checking balance", error.message)
    }


}


};

// burn token
document.getElementById("burn").onclick = async () => {
    const amount = ethers.parseUnits(document.getElementById("burntAmount").value, 18);
    const tx = await contract.burn(await signer.getAddress(), amount);
    await tx.wait();
    alert("token burned!");
}

// approve spender
document.getElementById("approve").onclick = async () => {
    const spender = document.getElementById("spender").value;
    const amount = ethers.parseUnits(document.getElementById("approveAmount").value, 18);
    const tx = await contract.approve(spender, amount);
    await tx.wait();
    alert("Spender approved!!");
} 

// transferFrom
document.getElementById("transferFrom").onclick = async () => {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const amount = ethers.parseUnits(document.getElementById("transferAmount").value, 18);
    const tx  = await contract.transferFrom(from, to, amount);
    await tx.wait();
    alert("Transfer from executed!");
}