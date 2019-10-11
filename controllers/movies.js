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
        console.log('get movie back end');
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
        let user = await User.findById(req.user._id);
        if (!user) return res.status(401).json({ err: 'bad credentials' });
        console.log(req.params.id);
        user.favMovie.forEach(async function (movie, idx) {
            if (req.params.id === movie.movieId.toString()) {
                user.favMovie.splice(idx, 1);
                const updatedUser = await user.save();
                console.log('deleted....');
                return res.json(updatedUser.favMovie);
            }
        })
}
