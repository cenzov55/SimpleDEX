import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

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
};

export default deployTokenA;

// Añadir etiquetas opcionales para ejecutar solo este script
deployTokenA.tags = ["TokenA"];
