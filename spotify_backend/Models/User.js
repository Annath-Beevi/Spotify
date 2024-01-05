const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        private: true,
    },
    username: {
        type: String,
        required: true,
    },
    role: { 
        type: String, 
        enum: ['user', 'admin', 'artist'], 
        default: 'user' 
    },
    likedSongs: {
        type: String,
        default: "",
    },
    likedPlaylist: {
        type: String,
        default: "",
    },
    subscribedArtists: {
        type: String,
        default: "",
    }
});

module.exports = mongoose.model("User", userSchema);

