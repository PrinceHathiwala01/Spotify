const express = require("express");
const listenMusicController = require("../controller/listenMusic.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/", authMiddleware.authUser, listenMusicController.getAllMusic);

module.exports = router;