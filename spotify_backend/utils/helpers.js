const jwt = require("jsonwebtoken");

const getToken = async (email, user) => {
    const token = jwt.sign(
        {identifier: user._id}, 
        process.env.PASSPORT_SECRET_KEY
        );
    return token
}

module.exports = {getToken}