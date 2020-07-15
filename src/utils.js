import AWS from 'aws-sdk'
import logger from '@wdio/logger'

const log = logger('@wdio/aws-device-farm-service')

async function getTestGridInfo(awsParams) {
    let testGridInfo = {
        hostname: `testgrid-devicefarm.${awsParams.region}.amazonaws.com`,
        path: '',
        port: 443,
        protocol: 'https'
    }

    // Create test grid
    let data
    try {
        const deviceFarm = new AWS.DeviceFarm(awsParams)
        const params = {
            expiresInSeconds: awsParams.expiresInSeconds,
            projectArn: awsParams.projectArn
        }
        data = await deviceFarm.createTestGridUrl(params).promise()
    } catch (error) {
        // TODO: Test this
        throw new Error(`Failed to create test grid. Reason: ${error}`)
    }

    // Retrieve webdriver path
    try {
        testGridInfo.path = data.url.match(`${testGridInfo.hostname}(.*)`)[1] // Extract path from URL
    } catch (error) {
        // TODO: Test this
        throw new Error(`Failed to retrieve test grid path. Reason: ${error}`)
    }
    log.debug(`Test Grid: ${JSON.stringify(testGridInfo)}`)

    if (testGridInfo.path === '') {
        throw new Error('Failed to retrieve test grid path. Reason: AWS returned \'\'')
    }

    return testGridInfo
}

const utils = {
    getTestGridInfo
}

export default utils
