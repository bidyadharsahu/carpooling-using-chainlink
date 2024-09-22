require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/jlSgEfhAbhIIBXS8YCV7G4fjaYCSRAH2`,  // Replace with your Alchemy Sepolia URL
      accounts: `remote`  // Replace with your private key
    }
  }
};
