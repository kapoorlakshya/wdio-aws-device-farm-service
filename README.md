# wdio-aws-device-farm-service (ALPHA)

A WebdriverIO v5 service to execute browser tests on AWS Device Farm.

**Note**: This project is still under development and needs to be fully tested.

### Requirements

WebdriverIO version higher than v5.22.5 is required for [this](https://github.com/webdriverio/webdriverio/pull/5145) change to be available.

### Installation

Until this package is published to [npmjs.com](https://www.npmjs.com/), you'll have to:

1. Clone the repo locally.
2. `cd` into the repo and build the package: `npm run compile`
3. Run `npm link` to create a symlink to this repo.
4. Navigate to your project root and run `npm link @wdio/aws-device-farm-service` to complete linking.
5. Add the following dependencies to your `package.json`:

```js
"devDependencies": {
  "@wdio/aws-device-farm-service": "latest"
}
```

### Usage

Update your config file with the following information:

```js
exports.config = {
  // ...
  services: [
    [
      "aws-device-farm",
      {
        region: "us-west-2", // Only one available as of April 2020
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        projectArn: process.env.AWS_DF_ARN,
        expiresInSeconds: 300, // 5 minutes
      },
    ],
  ],
  capabilities: [
    {
      browserName: "chrome",
      browserVersion: "latest",
      platform: "windows",
    },
  ],
  // ...
};
```

Now simply execute your test(s) and you should see browser sessions launching on AWS Device Farm.

### Supported Capabilities

[https://docs.aws.amazon.com/devicefarm/latest/testgrid/techref-support.html](https://docs.aws.amazon.com/devicefarm/latest/testgrid/techref-support.html)
