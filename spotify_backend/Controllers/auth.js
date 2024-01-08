const User = require('../Models/User')
const bcrypt = require("bcryptjs")
const { getToken } = require('../utils/helpers')

const register = async (req, res) => {
    const { email, password, firstName, lastName, username, role } = req.body
    const existingUser = await User.findOne({ email: email })
    if (existingUser) {
        return res.status(403).json({ error: "A user with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUserData = {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        username,
        role
    }
    const newUser = await User.create(newUserData)

    const token = await getToken(email, newUser)

    const userToReturn = {...newUser.toJSON(), token }
    delete userToReturn.password;
    return res.status(200).json(userToReturn)
}

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email })

    if (!user) {
        return res.status(403).json({ err: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
        return res.status(403).json({ err: "Invalid credentials" })
    }

    const token = await getToken(user.email, user)

    const userToReturn = { ...user.toJSON(), token }
    delete userToReturn.password;
    return res.status(200).json(userToReturn)
}

const getAllUsers = async (req, res) => {
    const users = await User.find({})
    res.status(200).json({users})
}

const deleteUser = async (req,res) => {
    const {userId} = req.params;

    const user = await User.findOneAndDelete({_id: userId});

    if(!user){
        res.status(404).json({msg: `No user with id ${userId}`})
    }

    res.status(200).json({user})
}

module.exports = { register, login, getAllUsers, deleteUser}