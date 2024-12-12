import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deploySimpleDEX: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const tokenA = await hre.deployments.get("TokenA");
  const tokenB = await hre.deployments.get("TokenB");
  

  await deploy("SimpleDEX", {
    from: deployer,
    args: [tokenA.address, tokenB.address],
    log: true,
    autoMine: true,
  });
};

export default deploySimpleDEX;
deploySimpleDEX.tags = ["SimpleDEX"];
