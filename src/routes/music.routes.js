const express = require("express");
const musicController = require("../controller/music.controller");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");

const upload = multer({
    storage: multer.memoryStorage(),
});

router.post("/upload", authMiddleware.authArtist, upload.single("music"), musicController.createMusic);
module.exports = router;