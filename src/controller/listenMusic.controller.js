const musicModel = require("../models/music.model");

async function getAllMusic(req, res) { 
    const music = await musicModel.find().populate("artist", "username email");

    //Below code is used to fetch only one music through LIMIT function
    // const music = await musicModel.find().limit(1).populate("artist","username email");

        res.status(200).json({
            message: "Music fetched successfully",
            music: music,
        });
}

module.exports = { getAllMusic };
