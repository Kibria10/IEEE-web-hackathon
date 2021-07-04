const{ createUser, getUserByUserId, getUser, updateUser, deleteUser, login, createFeed, getFeed} = require("./user.controller");
// const { feed } = require("./user.service");
const router = require("express").Router();

router.post("/", createUser);
router.get("/feed", getFeed);
router.get("/", getUser);
router.get("/:id", getUserByUserId);
router.patch("/", updateUser);
router.delete("/", deleteUser);
router.post("/login",login);
router.post("/feed", createFeed);
module.exports = router;