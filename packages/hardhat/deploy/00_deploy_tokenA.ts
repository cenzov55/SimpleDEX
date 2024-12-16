import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployTokenA: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  console.log("Deploying TokenA...");

  await deploy("TokenA", {
    from: deployer,
    log: true,
    autoMine: true, // Para redes locales
  });

  console.log("TokenA deployed successfully!");

    // Get the deployed contract to interact with it after deploying.
    // const tokenA = await hre.ethers.getContract<Contract>("YourContract", deployer);
    // console.log("👋 Initial greeting:", await tokenA.greeting());
};

export default deployTokenA;

// Añadir etiquetas opcionales para ejecutar solo este script
deployTokenA.tags = ["TokenA"];
