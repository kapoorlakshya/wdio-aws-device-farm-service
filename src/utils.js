import AWS from 'aws-sdk'
import logger from '@wdio/logger'

const log = logger('@wdio/aws-device-farm-service')

export default async function getTestGridInfo(awsParams) {
    try {
        let testGrid = {
            hostname: `testgrid-devicefarm.${awsParams.region}.amazonaws.com`,
            path: '',
            port: 443,
            protocol: 'https'
        }

        const deviceFarm = new AWS.DeviceFarm(awsParams)
        const params = { expiresInSeconds: awsParams.expiresInSeconds, projectArn: awsParams.projectArn }
        const data = await deviceFarm.createTestGridUrl(params).promise()
        testGrid.path = data.url.match(`${testGrid.hostname}(.*)`)[1] // Extract path from URL
        log.debug(`AWS DeviceFarm Test Grid: ${testGrid}`)
        return testGrid
    } catch (error) {
        console.log(error)
        return
    }
}
