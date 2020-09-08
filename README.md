# wdio-aws-device-farm-service (BETA)

A WebdriverIO v5 service to execute browser tests on AWS Device Farm.

## Requirements

WebdriverIO v5.23+ is required for [this](https://github.com/webdriverio/webdriverio/pull/5145) change to be available.

Support for v6 is coming [soon](https://github.com/kapoorlakshya/wdio-aws-device-farm-service/issues/1)!

## Installation

Until this package is published to [npmjs.com](https://www.npmjs.com/), you'll have to:

1. Clone the repo locally and `cd` into
2. Install dependencies: `npm install`
3. Build package: `npm run compile`
4. Run `npm link` to create a symlink to the repo
5. Navigate to your project root and run `npm link wdio-aws-device-farm-service` to complete linking
6. Add the following dependencies to your `package.json`:

```json
"dependencies": {
  "wdio-aws-device-farm-service": "latest"
}
```

## Usage

Update your config file with the following information:

```js
exports.config = {
  // ...
  services: [
    [
      'wdio-aws-device-farm',
      {
        region: 'us-west-2', // Only one available as of April 2020
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        projectArn: process.env.AWS_DF_ARN,
        expiresInSeconds: 300, // 5 minutes
      },
    ],
  ],
  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: 'latest',
      platform: 'windows',
    },
  ],
  // ...
};
```

Now simply execute your test(s), and you should see browser sessions launching on AWS Device Farm.

## Supported Capabilities

[https://docs.aws.amazon.com/devicefarm/latest/testgrid/techref-support.html](https://docs.aws.amazon.com/devicefarm/latest/testgrid/techref-support.html)
