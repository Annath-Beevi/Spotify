const express = require("express");
require("express-async-errors");
require("dotenv").config()
const JwtStrategy = require('passport-jwt').Strategy, 
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport")

const connectDB = require("./DB/connect")
const cors = require("cors")
const User = require('./Models/User')
const authRoute = require('./Routes/auth')
const songRoute = require('./Routes/song')
const playlistRoute = require('./Routes/playlist')
const errorHandler = require('./Middleware/Error-Handler');
const app = express();
app.use(cors())
app.use(express.json())
const port = 8080

app.use("/auth", authRoute)
app.use("/song", songRoute)
app.use("/playlist", playlistRoute)
app.use(errorHandler)

start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)

        let opts = {}
        opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
        opts.secretOrKey = process.env.PASSPORT_SECRET_KEY;
        passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
            try {
                const user = await User.findOne({_id: jwt_payload.identifier });
                if (user) {
                return done(null, user);
                } else {
                return done(null, false);
                }
                } catch (err) {
                return done(err, false)
                }
        }))
        app.listen(port, console.log(`server running on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()