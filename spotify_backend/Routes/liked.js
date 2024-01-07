const express = require("express")
const passport = require("passport");
const { addLikedSong, getLikedSongs, getAllLikedSongs } = require("../Controllers/liked");
const router = express.Router();

router.post("/add/song", passport.authenticate("jwt", { session: false }), addLikedSong)
router.get("/get/likedsongs", passport.authenticate("jwt", { session: false }), getLikedSongs)
router.get("/get/alllikedsongs", passport.authenticate("jwt", { session: false }), getAllLikedSongs)

module.exports = router