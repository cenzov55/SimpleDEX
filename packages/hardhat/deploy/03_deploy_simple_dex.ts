import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deploySimpleDEX: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  console.log("Deploying SimpleDEX...");

  const tokenA = await hre.deployments.get("TokenA");
  const tokenB = await hre.deployments.get("TokenB");

  const simpleDEX = await deploy("SimpleDEX", {
    from: deployer,
    args: [tokenA.address, tokenB.address],
    log: true,
    autoMine: true, 
  });

  console.log("SimpleDEX deployed successfully at:", simpleDEX.address);

};

export default deploySimpleDEX;

// Añadir etiquetas opcionales para ejecutar solo este script
deploySimpleDEX.tags = ["SimpleDEX"];
