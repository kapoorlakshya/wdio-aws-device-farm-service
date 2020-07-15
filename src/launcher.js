import utils from './utils'

export default class AwsDeviceFarmLauncher {
    async onPrepare(config) {
        const awsParams = config.services[0][1]
        let testGridInfo = await utils.getTestGridInfo(awsParams)
        config.hostname = testGridInfo.hostname
        config.path = testGridInfo.path
        config.port = testGridInfo.port
        config.protocol = testGridInfo.protocol
    }
}
