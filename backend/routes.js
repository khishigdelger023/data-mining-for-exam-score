const express = require("express");
const dataModel = require("./models");
const app = express();

app.post("/data", async (request, response) => {
    // console.log(request);
    // const data = await dataModel.find({});
    const data = await db.collection('data').find().toArray();
    
    console.log(data)
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});
module.exports = app;