const main = async () => {
  const githubFactory = await hre.ethers.getContractFactory("Github");
  const githubContract = await githubFactory.deploy();

  await githubContract.deployed();

  console.log("Github Contract address: ", githubContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();

//0x5FbDB2315678afecb367f032d93F642f64180aa3