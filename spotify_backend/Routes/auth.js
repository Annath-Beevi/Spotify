const express = require("express");
const passport = require("passport");
const { register, login, getAllUsers } = require("../Controllers/auth");
const router = express.Router()

router.post("/register", register);
router.post("/login", login)
router.get("/get/allusers", passport.authenticate("jwt", { session: false }), getAllUsers)

module.exports = router