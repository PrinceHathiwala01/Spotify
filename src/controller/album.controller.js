const albumModel = require('../models/album.model');
const jwt = require('jsonwebtoken');

async function createAlbum(req, res) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== "artist") {
            return res.status(403).json({
                message: "You are not an artist",
            });
        }

        const { title, musics } = req.body;

        const album = await albumModel.create({
            title,
            musics: musics,
            artist: decoded.id,
        });

        res.status(201).json({
            message: "Album created successfully",
            album: {
                id: album._id,
                title: album.title,
                musics: album.musics,
                artist: album.artist,
            },
        });        
    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
}

module.exports = { createAlbum };
