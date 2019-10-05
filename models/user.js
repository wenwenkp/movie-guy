const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const commentSchema = new mongoose.Schema({
    movie: {
        required: true,
        type: String,
    },
    content: {
        required: true,
        type: String,
    },
}, {
    timestamps: true,
}
);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: String,
    description: String,
    comments: [commentSchema],
    favMovie: [],
    favPerformer: [],
}, {
    timestamps: true,
}
);

userSchema.pre('save', (next) => {
    const user = this;
    if(!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, (err, hash) => {
        if(err) return next(err);
        user.password = hash;
        next();
    });
});

module.exports = mongoose.model('User', userSchema);
