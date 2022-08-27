const mongoose = require('mongoose')
const {isEmail} = require('validator')

// objet de la bibliotheque mongoose
const userSchema = new mongoose.Schema (
    {
        pseudo: {
            type: String,
            required: true,
            minLength:3,
            maxLength: 30,
            unique: true,
            trim: true // permet de supprimer les espaces
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail], // permet de faire des verifications précises
            lowercase: true, // transforme toutes les lettres en minuscule
            trim: true
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            minLength: 6
        },
        bio: {
            type: String,
            max: 1024
        },
        followers: {
            type: [String]
        },
        following: {
            type: [String]
        },
        likes: {
            type: [String]
        }
    },
    {
        timestamps: true
    }
)

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel