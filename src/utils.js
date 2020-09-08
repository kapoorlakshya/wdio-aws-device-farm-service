import AWS from 'aws-sdk';
import logger from '@wdio/logger';

const log = logger('@wdio/aws-device-farm-service');

// returns test grid connection info
async function createTestGrid(awsParams) {
  // Create test grid
  let testGridUrl;
  try {
    const deviceFarm = new AWS.DeviceFarm(awsParams);
    const params = deviceFarmParams(awsParams); // Device Farm specific
    testGridUrl = await deviceFarm.createTestGridUrl(params).promise();
  } catch (error) {
    throw new Error(`Failed to create test grid. Reason: ${error}`);
  }

  // Retrieve and return webdriver path
  const testGridInfo = extractTestGridInfo(testGridUrl);
  log.debug(`Test Grid: ${JSON.stringify(testGridInfo)}`);
  return testGridInfo;
}

// Returns Device Farm specific params from given AWS params
function deviceFarmParams(params) {
  return {
    projectArn: params.projectArn,
    expiresInSeconds: params.expiresInSeconds,
  };
}

// Extracts connection info from given #createTestGridUrl response
function extractTestGridInfo(testGridUrl) {
  const info = {
    hostname: '',
    path: '',
    port: 443,
    protocol: 'https',
  };

  // Extract webdriver path from URL
  info.hostname = testGridUrl.url.match('(.*)amazonaws.com')[0]; // Extract base URL
  info.path = testGridUrl.url.match('amazonaws.com(.*)')[1]; // Extract path
  if (info.path === '') throw new Error(`No path found in URL - '${testGridUrl.url}'`);

  return info;
}

const utils = {
  createTestGrid,
};

export default utils;
