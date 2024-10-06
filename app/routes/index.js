const express = require("express");
const router = express.Router();

const authorRoutes = require("./authorRoutes")
//localhost:3001/api/v1 
router.get("/", (request, response) => {
    response.status(200).json({ success: true, message: "Request works"});
});

//localhost:3001/api/v1/authors
router.use("/authors", authorRoutes);

module.exports = router;