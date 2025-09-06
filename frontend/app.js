const tokenAddress = "0x2DE4c188E8F420fA27ffA49Ad9d883E0B8F69779";
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
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        contract = new ethers.Contract(tokenAddress, tokenABI, provider);
        const account = await signer.getAddress();
        document.getElementById("account").innerText = "Connected: " + account;
    } else {
        alert("MetaMask not detected!!");
    }
};

// send tokens
document.getElementById("send").onclick = async () => {
    const to = document.getElementById("recipient").value;
    const amount = ethers.parseUnits(document.getElementById("amount").value, 18)
    const tx = await contract.transfer(to, amount);
    await tx.wait();
    alert("Token sent!!");
};

// Check balance
document.getElementById("checkBalance").onclick = async () => {

    const check = document.getElementById("checkAccount").value;
    const balance = await contract.checkBalance(check);
    const decimals = await contract.decimals();
    const readableBalance = await ethers.formatUnits(balance, decimals);
    document.getElementById("balance").innerText = readableBalance;
        
};


// burn token
document.getElementById("burn").onclick = async () => {
    const amount = ethers.parseUnits(document.getElementById("burnAmount").value, 18);
    try {

      const tx = await contract.burn(amount);
      await tx.wait();
      alert("Token burned");

    } catch (err) {

        console.error("Burn errro", err);
        alert("Error burning token:" + err.message);
        
    }

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