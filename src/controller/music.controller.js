const musicModel = require('../model/music.model');
const jwt = require('jsonwebtoken');

async function createMusic(req, res) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded.role !== "artist"){
            return res.status(403).json({
                message: "You are not an artist",
            });
        }
    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
}