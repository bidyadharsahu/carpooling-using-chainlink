require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.21",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/jlSgEfhAbhIIBXS8YCV7G4fjaYCSRAH2`,  // Replace with your Alchemy Sepolia URL
      accounts: [`0x${34480e9bd7324c0ecd786ed878e0236bced228443fb63e0336a4bba90f867d31}`]  // Replace with your private key
    }
  }
};