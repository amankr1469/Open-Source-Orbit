<h1 align="center"> Open-Source Orbit </h1> <br>

<hr>

# Introduction

Open-Source Orbit  is a Decentralized Platform for Open Source developers. It provides a platform for developers to find projects to work on and get rewarded for their work. It also provides a platform for project owners to find developers to work on their projects and pay them in crypto. Developers can post their projects issues and get it solved by other developers.

# How to Run

1.          Clone the repository

2.          Change directory to client
    `$ cd smart_contract`
3.          Install dependencies

    `$ npm install`

4.      Install Metamask and Signin to alchemy.

5.      Create new App under Sepolia network.

6.      Copy its key and paste it in hardhat.config.js file under url.

7.      Get your metamask account private key and paste it in hardhat.config.js file under account.

8.      Deploy the contract

    `$ npx hardhat run scripts/deploy.js --network Sepolia`

9.      Copy the contract address and paste it in client/utils under constants.js file.

10.     Copy account key generated by deploying contract and paste it in client/utils under constants.js file.

11.     under smart_contact/artifacts/contracts copy data of Github.json file and paste it under client/utils into Github.json file.

12.     Change directory to client
    `$ cd client`
13.     Install dependencies

    `$ npm install`

14.     Run the client

    `$ npm run dev`
