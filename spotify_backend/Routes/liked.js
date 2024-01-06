const express = require("express")
const passport = require("passport");
const { addLikedSong, getLikedSongs } = require("../Controllers/liked");
const router = express.Router();

router.post("/add/song", passport.authenticate("jwt", { session: false }), addLikedSong)
router.get("/get/likedsongs", passport.authenticate("jwt", { session: false }), getLikedSongs)

module.exports = router