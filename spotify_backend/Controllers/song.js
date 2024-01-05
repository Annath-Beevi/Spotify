const Song = require('../Models/Song')
const User = require('../Models/User')

const createsong = async (req, res) => {
    console.log(req.user)
    const { name, thumbnail,description, track } = req.body;
    if (!name || !thumbnail || !track) {
        return res.status(301).json({ err: "Insufficient details to create song." })
    }
    const artist = req.user._id;
    console.log(artist)
    const songDetails = { name, thumbnail,description, track, artist }
    const createdSong = await Song.create(songDetails)
    return res.status(200).json(createdSong)
}

const getMySongs = async (req, res) => {
    // const currentUser = req.user;
    const songs = await Song.find({ artist: req.user._id }).populate("artist");
    return res.status(200).json({ data: songs })
}

const getAllSong = async (req,res) => {
    const songs = await Song.find({})
    res.status(200).json({songs})
}

const getArtist = async (req, res) => {
    const { artistId } = req.params;
    const artist = await User.findOne({ _id: artistId })
    if (!artist) {
        return res.status(301).json({ err: "Artist does not exist" })
    }

    const songs = await Song.find({ artist: artistId })
    return res.status(200).json({ data: songs })
}

const getName = async (req, res) => {
    const { songName } = req.params;

    const songs = await Song.find({ name: songName }).populate("artist");
    return res.status(200).json({ data: songs })
}

module.exports = { createsong, getMySongs, getArtist, getName, getAllSong }