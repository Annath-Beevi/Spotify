const express = require("express");
require("express-async-errors");
require("dotenv").config()
const JwtStrategy = require('passport-jwt').Strategy, 
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport")

const connectDB = require("./DB/connect")
const User = require('./Models/User')
const authRoute = require('./Routes/auth')
const songRoute = require('./Routes/song')
const playlistRoute = require('./Routes/playlist')
const errorHandler = require('./Middleware/Error-Handler')
const app = express();
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
        passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
            User.findOne({ id: jwt_payload.sub }, function (err, user) {
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                    // or you could create a new account
                }
            });
        }))
        app.listen(port, console.log(`server running on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()