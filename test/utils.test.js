import utils from '../src/utils'
import AWS from 'aws-sdk'

describe('getTestGridInfo', () => {
    test('should return DeviceFarm test grid info', async () => {
        // Test AWS config
        const awsParams = {
            // Only one available as of April 2020
            accessKeyId: 'test-access-key',
            expiresInSeconds: 300,
            projectArn: 'test-project-arn',
            region: 'us-west-2',
            secretAccessKey: 'test-secret-key', // 5 minutes
        }
        const params = {
            expiresInSeconds: awsParams.expiresInSeconds,
            projectArn: awsParams.projectArn
        }

        // Mock AWS call
        const createTestGridUrlPromise = jest.fn().mockReturnValue({
            promise: jest.fn().mockResolvedValue({
                url: `testgrid-devicefarm.${awsParams.region}.amazonaws.com/test-grid-path/wd/hub`
            })
        })
        AWS.DeviceFarm = jest.fn().mockImplementation(() => ({
            createTestGridUrl: createTestGridUrlPromise
        }))

        const data = await utils.getTestGridInfo(awsParams)

        expect(createTestGridUrlPromise).toHaveBeenCalledTimes(1)
        expect(createTestGridUrlPromise).toHaveBeenCalledWith(params)
        expect(data.hostname).toBe(`testgrid-devicefarm.${awsParams.region}.amazonaws.com`)
        expect(data.path).toBe('/test-grid-path/wd/hub')
        expect(data.port).toBe(443)
        expect(data.protocol).toBe('https')
    })
})
