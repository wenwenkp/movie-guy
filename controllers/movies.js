const User = require('../models/user');

module.exports = {
    getMovie,
    addMovie,
    removeMovie,
}

// send user favmovie to frontend
async function getMovie(req, res) {
    try {
        // find the user
        let user = await User.findById(req.user._id);
        if (!user) return res.status(401).json({ err: 'bad credentials' });
        // send user favourite movies
        return res.json(user.favMovie);
    } catch (err) {
        return res.status(401).json(err);
    }
}

// add movie to user favMovie list and send updated fav movies back to frontend
async function addMovie(req, res) {
    try {
        // find user
        let user = await User.findById(req.user._id);
        if (!user) return res.status(401).json({ err: 'bad credentials' });
        // add movie to favmovie list
        user.favMovie.push(req.body);
        await user.save();
        // send updated data back to frontend
        return res.json(user.favMovie);
    } catch (err) {
        return res.status(401).json(err);
    }
}

// remove movie from user favMovie list and send data back to frontend
async function removeMovie(req, res) {
    // find user
    let user = await User.findById(req.user._id);
    if (!user) return res.status(401).json({ err: 'bad credentials' });
    // find the movie from the list
    user.favMovie.forEach(async function (movie, idx) {
        if (req.params.id === movie.movieId.toString()) {
            // remove the movie
            user.favMovie.splice(idx, 1);
            // save data and send updated data to frontend
            const updatedUser = await user.save();
            return res.json(updatedUser.favMovie);
        }
    })
}
