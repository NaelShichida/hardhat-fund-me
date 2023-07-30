function deplyFunc() {
    console.log("Hi!")
}

module.exports.default = deployFunc()

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainID = network.config.chainid
}
