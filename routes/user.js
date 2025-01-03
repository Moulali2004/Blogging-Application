const { Router } = require("express");
const User = require("../models/user");
const Blog = require("../models/blog");

const router = Router();

router.get("/signin", (req, res) => {
    res.render("signin");
})

router.get("/signup", (req, res) => {
    res.render("signup");
})

router.post("/signup", async (req, res) => {
    const { fullName, email, password} = req.body;

    await User.create({
        fullName,
        email,
        password,
    });

    res.redirect("/");
});

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await User.matchPasswordandGenerateToken(email, password);
        res.cookie("token", token).redirect("/"); 
    } catch (error) { 
        return res.render("signin", {
            error: "Invalid email or password",
        })
    }
    //res.redirect("/");
    
});

router.get("/logout", (req, res) => {
    res.clearCookie("token").redirect("/");
});

router.get("/:id", async (req, res) => {
    const blogs = await Blog.find({ createdBy: req.params.id });
    res.render("account", { 
        blogs,
        user: req.users,
    })
});

module.exports = router;