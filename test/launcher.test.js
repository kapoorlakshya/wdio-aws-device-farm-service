import AwsDeviceFarmLauncher from '../src/launcher'
import utils from "../src/utils";

describe('AwsDeviceFarmLauncher', () => {
    describe('onPrepare', () => {
        test('should set the correct config', async () => {
            // Test config
            const config = {
                services: [
                    [
                        "aws-device-farm",
                        {
                            region: "us-west-2", // Only one available as of April 2020
                            accessKeyId: 'test-access-key',
                            secretAccessKey: 'test-secret-key',
                            projectArn: 'test-project-arn',
                            expiresInSeconds: 300, // 5 minutes
                        },
                    ],
                ]
            }

            // Mock getTestGridInfo
            utils.getTestGridInfo = jest.fn().mockReturnValue(
                    {
                        hostname: 'test-grid-host',
                        path: '/test-grid-path',
                        port: '1234',
                        protocol: 'https'
                    }
            )

            let launcher = new AwsDeviceFarmLauncher()
            await launcher.onPrepare(config)

            expect(config.hostname).toBe('test-grid-host')
            expect(config.path).toBe('/test-grid-path')
            expect(config.port).toBe('1234')
            expect(config.protocol).toBe('https')
        })
    })
})
