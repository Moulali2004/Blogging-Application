const { Router } = require("express");
const multer = require("multer");
const path = require('path');

const Blog = require("../models/blog");
const Comment = require("../models/comment");

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve("./public/uploads/")); 
    },
    filename: function (req, file, cb) {
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    }
})
const upload = multer({ storage: storage });

//Create new blog form
router.get("/add-new", (req, res) => {
    return res.render("addblog", {
        user: req.users,
    });
});

//Retrieving the existing Blog and Comments
router.get("/:id", async (req, res) => {
    const blog = await Blog.findById(req.params.id).populate('createdBy');
    const comments = await Comment.find({ blogId: req.params.id }).populate("createdBy");
    res.render("blog", {
        user: req.users,
        blog,
        comments,
    });
});

//Creating new blog
router.post("/", upload.single('coverImage'), async (req, res) => {
    
    const { title, body } = req.body;
    const blog = await Blog.create({
        title,
        body,
        coverImageURL: `/uploads/${req.file.filename}`,
        createdBy: req.users._id,
    });

    return res.redirect(`/blog/${blog._id}`);
});

//Creating Comments on blog
router.post("/comment/:blogId", async (req, res) => {
    await Comment.create({
        content: req.body.content,
        blogId: req.params.blogId,
        createdBy: req.users._id
    });
    res.redirect(`/blog/${req.params.blogId}`);
});


module.exports = router;