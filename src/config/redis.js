// const redis = require("redis");

// const redisPassword = process.env.REDIS_PASWORD;
// const redisHost = process.env.REDIS_HOST;
// const redistPort = process.env.REDIS_PORT;

// redis-cli -u redis://default:qZvc3raEcIqZRHrS5JPuAPPD0IFLZS9D@redis-13204.c100.us-east-1-4.ec2.cloud.redislabs.com:13204
// const client = redis.createClient({
//   socket: {
//     host: redisHost,
//     port: redistPort,
//   },
//   password: redisPassword,
// });

// (async () => {
//   client.connect();
//   client.on("connect", () => {
//     // eslint-disable-next-line no-console
//     console.log("You're connected db redis ...");
//   });
// })();

// module.exports = client;
