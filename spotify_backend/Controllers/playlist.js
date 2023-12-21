const Playlist = require('../Models/Playlist')
const User = require('../Models/User')
const Song = require('../Models/Song')

const createPlaylist = async (req, res) => {
    const currentUser = req.user;
    const { name, thumbnail, songs } = req.body;
    if (!name || !thumbnail || !songs) {
        return res.status(301).json({ err: "Insufficient data" })
    }
    const playlistData = {
        name,
        thumbnail,
        songs,
        owner: currentUser._id,
        collaborators: [],
    };
    const playlist = await Playlist.create(playlistData)
    return res.status(200).json(playlist)
}

const getPlaylist = async (req, res) => {
    const playlistId = req.params.playlistId;
    const playlist = await Playlist.findOne({ _id: playlistId })
    if (!playlist) {
        return res.status(301).json({ err: "Invalid ID" })
    }
    return res.status(200).json(playlist)
}

const getArtist = async (req, res) => {
    const artistId = req.params.artistId;
    const artist = await User.findOne({ _id: artistId })
    if (!artist) {
        return res.status(304).json({ err: "Invalid Artist ID" })
    }

    const playlist = await Playlist.find({ owner: artistId })
    return res.status(200).json({ data: playlist })
}

const addSong = async (req,res) => {
    const currentUser = req.user;
    const {playlistId, songId} = req.body;
    const playlist = await Playlist.findOne({_id: playlistId})
    if(!playlist){
        return res.status(304).json({err: "Playlist does not exist"})
    }

    if(playlist.owner !== currentUser._id && playlist.collaborators.includes(currentUser._id)){
        return res.status(400).json({err: "Not allowed"})
    }

    const song = await Song.findOne({_id: songId})
    if(!song){
        return res.status(304).json({err: "Song does not exist"})
    }

    playlist.songs.push(songId)
    await playlist.save()

    return res.status(200).json(playlist)
}

module.exports = { createPlaylist, getPlaylist, getArtist, addSong }