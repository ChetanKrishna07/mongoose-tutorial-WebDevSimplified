const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    name: {
        type: String,
        minLength: 5,
        maxLength: 20
    },
    age: {
        type: Number,
        min: 1,
        max: 100
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: {
            validator: (email) => {
                if (email.includes("@")) {
                    if (email.endsWith(".com")) {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            },
            message: 'Invalid Email id'
        }
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectID,
        ref: 'User'
    },
    hobbies: [String],
    address: {
        street: String,
        city: String
    }
})

module.exports = mongoose.model('User', userScheme)