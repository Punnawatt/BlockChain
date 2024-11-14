const hre = require("hardhat");

async function main() {
  const ProblemAuthor = await hre.ethers.getContractFactory("ProblemAuthor");

  const problemHash = hre.ethers.utils.formatBytes32String(
    "Problem Hash Example"
  );
  const timeoutTime = Math.floor(Date.now() / 1000) + 3600;

  console.log("Deploying ProblemAuthor contract...");
  const problemAuthor = await ProblemAuthor.deploy(timeoutTime, problemHash, {
    value: hre.ethers.utils.parseEther("1"),
  });

  await problemAuthor.waitForDeployment();

  console.log(
    "ProblemAuthor contract deployed to:",
    await problemAuthor.getAddress()
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
