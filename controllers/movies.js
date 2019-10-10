const User = require('../models/user');

module.exports = {
    getMovie,
    addMovie,
    removeMovie,
}

async function getMovie(req, res) {
    try {
        let user = await User.findById(req.user._id);
        if (!user) return res.status(401).json({ err: 'bad credentials' });
        console.log('ready to send moves');
        return res.json(user.favMovie);
    } catch (err) {
        return res.status(401).json(err);
    }
}

async function addMovie(req, res) {
    try {
        let user = await User.findById(req.user._id);
        if (!user) return res.status(401).json({ err: 'bad credentials' });
        user.favMovie.push(req.body);
        await user.save();
        console.log('ready to update movies');
        return res.json(user.favMovie);
    } catch (err) {
        return res.status(401).json(err);
    }
}

async function removeMovie(req, res) {
    try {

        let user = await User.findById(req.user._id);
        if (!user) return res.status(401).json({ err: 'bad credentials' });

        for (let i = 0; i < user.favMovie.length; i++) {
            if (user.favMovie[i].id === req.body.id) {
                user.favMovie.splice(i, 1);
            }
        }
        await user.save();
        console.log('already deleted movies');
        return res.json(user.favMovie);
    } catch (err) {
        return res.status(401).json(err);

    }
}
