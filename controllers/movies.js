const User = require('../models/user');

module.exports = {
    addMovie,
    removeMovie,
}

async function addMovie(req, res){
    console.log('here');
    let user = await User.findById(req.user._id);
    user.favMovie.push(req.body);
    let updatedUser = await user.save();
    return res.json(updatedUser);

}
async function removeMovie(req, res){
    console.log('deleting----------');
    console.log(req.body.id);
    let user = await User.findById(req.user._id);
    console.log(user);
    for(let i = 0; i < user.favMovie.length; i++){
        console.log(user.favMovie[i].id);
        if(user.favMovie[i].id === req.body.id){
            user.favMovie.splice(i, 1);
        }
    }
    console.log('done deleteing...');
    let updatedUser = await user.save();
    return res.json(updatedUser);
}