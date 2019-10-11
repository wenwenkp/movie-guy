const User = require('../models/user');

module.exports = {
    getMovie,
    addMovie,
    removeMovie,
}

// to send back myMovie state in App
async function getMovie(req, res) {
    try {
        let user = await User.findById(req.user._id);
        if (!user) return res.status(401).json({ err: 'bad credentials' });
        return res.json(user.favMovie);
    } catch (err) {
        return res.status(401).json(err);
    }
}

// add movie to user favMovie list and send data back to update state in App
async function addMovie(req, res) {
    try {
        let user = await User.findById(req.user._id);
        if (!user) return res.status(401).json({ err: 'bad credentials' });        
        user.favMovie.push(req.body);
        await user.save();
        return res.json(user.favMovie);
    } catch (err) {
        return res.status(401).json(err);
    }
}

// remove movie to user favMovie list and send data back to update state in App
async function removeMovie(req, res) {
    try {

        let user = await User.findById(req.user._id);
        if (!user) return res.status(401).json({ err: 'bad credentials' });
        for (let i = 0; i < user.favMovie.length; i++) {
            if (user.favMovie[i].movieId === req.body.id) {
                user.favMovie.splice(i, 1);
            }
        }
        await user.save();
        return res.json(user.favMovie);
    } catch (err) {
        return res.status(401).json(err);
    }
}
