const Liked = require('../Models/Liked')
const Song = require('../Models/Song')

addLikedSong = async (req, res) => {
    const currentUser = req.user;
    const { songId } = req.body;

    const song = await Song.findOne({ _id: songId });
    if (!song) {
        return res.status(304).json({ err: "Song does not exist" });
    }

    const likedSongs = {
        owner: currentUser._id,
        songs: songId
    }

    const liked = await Liked.create(likedSongs)
    return res.status(200).json(liked)
}

const getLikedSongs = async (req, res) => {
    const artistId = req.user._id;

    const likedSongs = await Liked.find({ owner: artistId }).populate("songs");
    return res.status(200).json({ data: likedSongs });
}


const getAllLikedSongs = async (req, res) => {
    const liked = await Liked.find({})
    res.status(200).json({liked})
}

module.exports = { addLikedSong, getLikedSongs , getAllLikedSongs}