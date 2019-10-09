const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
    getMovie,
    addMovie,
    removeMovie,
}

// async function addMovie(req, res) {
//     let user = await User.findById(req.user._id);

//     try {
//         user.favMovie.push(req.body);
//         await user.save();
//         const token = createJWT(user);
//         console.log(token)

//         res.json({ token });
//     } catch (err) {
//         res.status(400).json(err);
//     }
// }

async function getMovie(req, res) {
    try {
        let user = await User.findById(req.user._id);
        if (!user) return res.status(401).json({ err: 'bad credentials' });
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
        return res.json(user.favMovie);
    } catch (err) {
        return res.status(401).json(err);
    }
}

async function removeMovie(req, res) {
    console.log('deleting----------');
    console.log(req.body.id);
    let user = await User.findById(req.user._id);
    console.log(user);
    for (let i = 0; i < user.favMovie.length; i++) {
        console.log(user.favMovie[i].id);
        if (user.favMovie[i].id === req.body.id) {
            user.favMovie.splice(i, 1);
        }
    }
    console.log('done deleteing...');
    let updatedUser = await user.save();
    return res.json(updatedUser);
}

function createJWT(user) {
    return jwt.sign(
        { user },
        SECRET,
        { expiresIn: '1h' }
    );
}