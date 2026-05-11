const express = require("express");
const musicController = require("../controller/music.controller");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const listenMusicController = require("../controller/listenMusic.controller");
const multer = require("multer");

const upload = multer({
    storage: multer.memoryStorage(),
});

router.post("/upload", authMiddleware.authArtist, upload.single("music"), musicController.createMusic);
router.get("/albums", authMiddleware.authUser, musicController.getAllAlbums);
router.get("/albums/:albumId", authMiddleware.authUser, musicController.getAlbumById);
module.exports = router;