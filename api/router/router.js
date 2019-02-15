const express = require("express");
const router = express.Router();
const file = require("../controller/fileController");

const fileController = new file();

router.post("/LoadFile", (req, res) => fileController.LoadFile(req, res));


module.exports = router;