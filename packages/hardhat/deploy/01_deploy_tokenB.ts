import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

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
};

export default deployTokenB;

// Añadir etiquetas opcionales para ejecutar solo este script
deployTokenB.tags = ["TokenB"];
