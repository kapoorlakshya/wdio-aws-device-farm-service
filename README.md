# wdio-aws-device-farm-service (BETA)

A WebdriverIO v5 service to execute browser tests on AWS Device Farm.

### Requirements

WebdriverIO version higher than v5.22.5 is required for [this](https://github.com/webdriverio/webdriverio/pull/5145) change to be available.

### Installation

Until this package is published to [npmjs.com](https://www.npmjs.com/), you'll have to:

1. Clone the repo into your `node_modules/@wdio` folder:

```bash
$ git clone https://github.com/kapoorlakshya/wdio-aws-device-farm-service.git node_modules/@wdio/aws-device-farm
```

2. Install as a development dependency from the local repo:

```bash
$ npm install --save-dev node_modules/@wdio/aws-device-farm-service
```

The service should now be listed as a scoped package under `@wdio` in the `package.json`:

```js
"devDependencies": {
  "@wdio/aws-device-farm-service": file: "./node_modules/@wdio/aws-device-farm-service"
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
        expiresInSeconds: 300 // 5 minutes
      }
    ]
  ],
  capabilities: [
    {
      browserName: "chrome",
      browserVersion: "latest",
      platform: "windows"
    }
  ]
  // ...
};
```

Now simply execute your test(s) and you should see browser sessions launching on AWS Device Farm.

### Supported Capabilities

[https://docs.aws.amazon.com/devicefarm/latest/testgrid/techref-support.html](https://docs.aws.amazon.com/devicefarm/latest/testgrid/techref-support.html)
