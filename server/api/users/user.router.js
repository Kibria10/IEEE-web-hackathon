const{ createUser, getUserByUserId, getUser, updateUser, deleteUser, login, createFeed, getFeed, comment, getComment} = require("./user.controller");
const router = require("express").Router();

router.post("/", createUser);
router.get("/feed", getFeed);
router.get("/comment/:id", getComment)
router.get("/", getUser);
router.get("/:id", getUserByUserId);
router.patch("/", updateUser);
router.delete("/", deleteUser);
router.post("/login",login);
router.post("/feed", createFeed);
router.post("/comment", comment);
module.exports = router;