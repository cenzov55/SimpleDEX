import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";


const deployTokenB: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  console.log("Deploying TokenB...");

  await deploy("TokenB", {
    from: deployer,
    log: true,
    autoMine: true, // Para redes locales
  });

  console.log("TokenB deployed successfully!");
    // Get the deployed contract to interact with it after deploying.
    // const tokenB = await hre.ethers.getContract<Contract>("YourContract", deployer);
    // console.log("👋 Initial greeting:", await tokenB.greeting());
};

export default deployTokenB;

// Añadir etiquetas opcionales para ejecutar solo este script
deployTokenB.tags = ["TokenB"];
