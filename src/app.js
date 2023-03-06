/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

//  Import Express
const express = require("express");

//  Declare Variable
const app = express();
const port = 3001;

// Call Main Router on Routes Folder
const routerNavigation = require("./routes");

// Use Main Routes that was Called
app.use(routerNavigation);

// If Router Error or Not Found then send this Message
app.use("/*", (request, response) => {
  response.status(404).send("Path Not Found");
});

// Listen Port on Console
app.listen(port, () => {
  console.log(`Server is Running on port:  ${port}`);
});
