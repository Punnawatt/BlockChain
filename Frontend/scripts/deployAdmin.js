const hre = require("hardhat");

async function main() {
  const Admin = await hre.ethers.getContractFactory("Admin");

  console.log("Deploying Admin contract...");
  const admin = await Admin.deploy();

  await admin.waitForDeployment();

  console.log("Admin contract deployed to:", await admin.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
