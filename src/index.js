const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;

//Create Mongo connection and get the express app to listen on config.port
app.listen(config.port, async () => {
    console.log(`Server Started at ${config.port}`);
    await mongoose.connect(config.mongoose.url, config.mongoose.options);
    console.log("Database connected");
});

  
