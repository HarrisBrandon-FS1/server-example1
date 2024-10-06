const express = require("express");
const router = express.Router();

const authors = [{id: "24", name:"Hemmingway"}];

//localhost:3001/api/v1/authors /
router.get("/", (req, res) => {
    res.status(200).json({success: true, message: `${req.method} Request made to Authors`});
});

router.post("/", (req, res) => {
    res.status(200).json({success: true, message: `${req.method} Request made to Authors`});
console.log(">>>", req.body);
authors.push(req.body);
});


//localhost:3001/api/v1/authors/42343264
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const author = authors.filter((item) => {
        return item.id == req.params.id
    });
    if (author) {
        res.json(author);
    }else {
        res.status(404).json({ error: 'Author not found'});
    }
    res.status(200).json({success: true, id:id, message: `${req.method} Request made to Authors`});
  console.log(author);
});

router.patch("/:id", (req, res) => {
    console.log("id >>> ", req.params.id)
    const { id } = req.params;
    res.status(200).json({success: true, id:id, message: `${req.method} Request made to Authors`});
});


router.delete("/:id", (req, res) => {
    console.log("id >>> ", req.params.id)
    const { id } = req.params;
    res.status(200).json({success: true, id:id, message: `${req.method} Request made to Authors`});
});
module.exports = router;