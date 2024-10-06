const express = require("express");
const routeHandler = require("./routes");

const app = express();
app.use(express.json());
app.use("/api/v1", routeHandler);

app.use("*", (req,res)=>{
    res.status(404).json({success:false, message: "route isn't there"});
});


module.exports = app;