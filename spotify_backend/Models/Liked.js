const mongoose = require("mongoose")

const likedSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    songs: {
            type: mongoose.Types.ObjectId,
            ref: "Song"
        },
})

module.exports = mongoose.model("Liked", likedSchema)