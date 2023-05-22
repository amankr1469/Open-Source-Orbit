// https://eth-goerli.g.alchemy.com/v2/Ahx-Xya2uo4ZlS21ICAAM7nQ33a9vMot

require('@nomiclabs/hardhat-waffle');

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const SEPOLIA_API_KEY = process.env.SEPOLIA_API_KEY;

module.exports = {
  solidity: '0.8.0',
  networks: {
    Sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${SEPOLIA_API_KEY}`],
    },
  },
};

//Github Contract address:  0x9Fd783E79A9ae2a0bF49868aa6AA3791E573d847