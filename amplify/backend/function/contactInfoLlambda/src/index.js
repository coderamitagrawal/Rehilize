const awsServerlessExpress = require("aws-serverless-express");
const aws = require("aws-sdk");
const app = require("./app");
const ses = new aws.SES();

/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return awsServerlessExpress.proxy(server, event, context, "PROMISE").promise;
  // await ses
  //   .sendEmail({
  //     Destination: {
  //       ToAddresses: [process.env.SES_EMAIL],
  //     },
  //     Source: process.env.SES_EMAIL,
  //     Message: {
  //       Subject: { Data: "Candidate Submission" },
  //       Body: {
  //         Text: {
  //           Data: `My name is hitesh. You can reach me at hitesh  gurjar`,
  //         },
  //       },
  //     },
  //   })
  //   .promise();
  // return { status: "done" };
};
