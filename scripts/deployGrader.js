const hre = require("hardhat");

async function main() {
  const Grader = await hre.ethers.getContractFactory("Grader");

  const price = hre.ethers.utils.parseEther("0.1");

  console.log("Deploying Grader contract...");
  const grader = await Grader.deploy(price);

  await grader.waitForDeployment();

  console.log("Grader contract deployed to:", await grader.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
