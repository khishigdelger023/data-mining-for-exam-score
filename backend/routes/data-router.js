const express = require("express");
const dataModel = require("./models");
const app = express();

app.post("/data", async (request, response) => {
    console.log(request);
    const data = await dataModel.find({});
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});
