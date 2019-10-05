const mongoose = require('mongoose');

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

module.exports = mongoose.model('User', userSchema);
