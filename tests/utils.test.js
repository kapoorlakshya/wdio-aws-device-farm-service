import utils from '../src/utils';
import AWS from 'aws-sdk';

describe('createTestGrid', () => {
  let awsParams;

  beforeAll(async () => {
    // Test AWS config
    awsParams = {
      // Only one available as of April 2020
      accessKeyId: 'test-access-key',
      secretAccessKey: 'test-secret-key', // 5 minutes
      region: 'us-west-2',
      projectArn: 'test-project-arn',
      expiresInSeconds: 300,
    };
  });

  it('should return DeviceFarm test grid info', async () => {
    const createTestGridUrlPromise = jest.fn().mockReturnValue({
      promise: jest.fn().mockResolvedValue({
        url: `testgrid-devicefarm.${awsParams.region}.amazonaws.com/test-grid-path/wd/hub`,
      }),
    });
    AWS.DeviceFarm = jest.fn().mockImplementation(() => ({
      createTestGridUrl: createTestGridUrlPromise,
    }));

    const data = await utils.createTestGrid(awsParams);

    expect(createTestGridUrlPromise).toHaveBeenCalledTimes(1);
    expect(data.hostname).toBe(`testgrid-devicefarm.${awsParams.region}.amazonaws.com`);
    expect(data.path).toBe('/test-grid-path/wd/hub');
    expect(data.port).toBe(443);
    expect(data.protocol).toBe('https');
  });

  it('should throw an error on failure to create test grid', async () => {
    const mockCreateTestGrid = jest.fn().mockReturnValue({
      promise: jest.fn().mockReturnValueOnce(Promise.reject('Something went wrong')),
    });
    AWS.DeviceFarm = jest.fn().mockImplementation(() => ({
      createTestGridUrl: mockCreateTestGrid,
    }));

    await expect(utils.createTestGrid(awsParams)).rejects.toThrowError(
      'Failed to create test grid. Reason: Something went wrong',
    );
  });

  it('should throw an error if test grid path is blank', async () => {
    const mockCreateTestGrid = jest.fn().mockReturnValue({
      promise: jest.fn().mockResolvedValueOnce({
        url: 'testgrid-devicefarm.us-west-2.amazonaws.com',
      }),
    });
    AWS.DeviceFarm = jest.fn().mockImplementation(() => ({
      createTestGridUrl: mockCreateTestGrid,
    }));

    await expect(utils.createTestGrid(awsParams)).rejects.toThrowError(
      "No path found in URL - 'testgrid-devicefarm.us-west-2.amazonaws.com'",
    );
  });
});
