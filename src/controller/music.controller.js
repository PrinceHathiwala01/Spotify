const musicModel = require('../models/music.model');
const { uploadFile } = require('../services/storage.service');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

async function createMusic(req, res) {
    /*This code is moved to auth middleware
    
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
    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }*/

    const { title } = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'))
    
    const music =await musicModel.create({
        uri: result.url,
        title,
        artist:req.user.id,
    });
    res.status(201).json({
        message: "Music created successfully",
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist
        }
    });
}

module.exports = {createMusic}
