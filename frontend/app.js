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

