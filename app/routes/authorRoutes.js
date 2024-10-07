const express = require("express");
const router = express.Router();

const authors = [{id: 23, name:"Hemmingway"}];

//localhost:3001/api/v1/authors /
router.get("/", (req, res) => {
    res.json(authors)
    res.status(200).json({success: true, message: `${req.method} Request made to Authors`});
});





//Post
router.post("/", (req, res) => {
    res.status(200).json({success: true, message: `${req.method} Request made to Authors`});
console.log(">>>", req.body);
console.log(authors);
authors.push(req.body);
});







//localhost:3001/api/v1/authors/42343264
router.get("/:id", (req, res) => {
   const authorId = parseInt(req.params.id);
   const author = authors.find(author => author.id === authorId);

   if (author) {
    res.json(author);
   } else {
    res.status(404).json({ message: 'Author not found'});
   }
});





//Patch
router.patch("/:id", (req, res) => {
    console.log("id >>> ", req.params.id)


    const authorId = parseInt(req.params.id);
    const authorIndex = authors.findIndex(author => author.id === authorId);

    if (authorIndex === -1) {
        return res.status(404).json({ message: 'Author not found' });
    }

    const updatedAuthor = { ...authors[authorIndex], ...req.body };
    authors[authorIndex] = updatedAuthor;

    res.json('Author patched successfully')

    res.status(200).json({success: true, id:id, message: `${req.method} Request made to Authors`});
});




//Delete
router.delete("/:id", (req, res) => {
    console.log("id >>> ", req.params.id)
    const { id } = req.params;

    const authorId = parseInt(req.params.id);

    const authorIndex = authors.findIndex(author => author.id === authorId);

    if(authorIndex === -1) {
        return res.status(404).json({ message: 'Author not found'});
    }

    authors.splice(authorIndex, req.params.id);

    res.json({message: 'Author deleted successfully'});

    res.status(200).json({success: true, id:id, message: `${req.method} Request made to Authors`});
});





module.exports = router;