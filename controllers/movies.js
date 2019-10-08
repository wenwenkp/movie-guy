const User = require('../models/user');

module.exports = {
    addMovie,
}

async function addMovie(req, res){
    console.log(req.user);
    console.log(req.body);
    let user = await User.findById(req.user._id);
    user.favMovie.push(req.body);
    let updatedUser = await user.save();
    return res.json(updatedUser);

}