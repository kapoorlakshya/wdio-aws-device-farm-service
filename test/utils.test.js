// import AwsDeviceFarmLauncher from 'src/launcher'
//
// describe('AwsDeviceFarmLauncher', () => {
//     let launcher = undefined
//
//     before(() => {
//         launcher = new AwsDeviceFarmLauncher()
//     })
//
//     describe('onPrepare', ()=> {
//         it('sets the config for AWS Device Farm', () => {
//             const config = {
//                 "aws-device-farm": {
//                     region: "us-west-2",
//                     accessKeyId: 'access-key',
//                     secretAccessKey: 'secret-access-key',
//                     projectArn: 'project-arn',
//                     expiresInSeconds: 300
//                 }
//             }
//
//             const launcher = new AwsDeviceFarmLauncher(config)
//         })
//     })
// })