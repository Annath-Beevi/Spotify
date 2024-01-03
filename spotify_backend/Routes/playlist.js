const express = require("express")
const passport = require("passport");
const { createPlaylist, getPlaylist, getArtist, addSong, getMe } = require("../Controllers/playlist");
const router = express.Router();

router.post("/create", passport.authenticate("jwt", { session: false }), createPlaylist)
router.get("/get/playlist/:playlistId", passport.authenticate("jwt", { session: false }), getPlaylist)
router.get("/get/me", passport.authenticate("jwt", { session: false }), getMe)
router.get("/get/artist/:artistId", passport.authenticate("jwt", { session: false }), getArtist)
router.post("/add/song", passport.authenticate("jwt", { session: false }), addSong)

module.exports = router