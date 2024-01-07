const express = require("express")
const passport = require("passport")
const { createsong, getMySongs, getArtist, getName, getAllSong, deleteSong } = require("../Controllers/song")
const router = express.Router()

router.post("/create", passport.authenticate("jwt", { session: false }), createsong)
router.get("/get/allsongs", passport.authenticate("jwt", { session: false }), getAllSong)
router.get("/get/mysongs", passport.authenticate("jwt", { session: false }), getMySongs)
router.get("/get/artist/:artistId", passport.authenticate("jwt", { session: false }), getArtist)
router.get("/get/songname/:songName", passport.authenticate("jwt", {session: false}), getName)
router.delete("/delete/song/:songId",passport.authenticate("jwt", {session: false}), deleteSong)

module.exports = router