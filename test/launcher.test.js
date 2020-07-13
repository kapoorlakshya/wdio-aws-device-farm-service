import AwsDeviceFarmLauncher from '../src/launcher'
import Utils from "../src/utils";

describe('AwsDeviceFarmLauncher', () => {
    beforeEach(() => {
        const getTestGridInfo = jest
            .fn()
            .mockReturnValueOnce({
                hostname: 'test-host',
                path: 'test-path',
                port: '1234',
                protocol: 'https'
            })
    })

    test('sets the hostname', () => {
    })

    test('sets the path', () => {
    })

    test('sets the port', () => {
    })

    test('sets the protocol', () => {
    })
})