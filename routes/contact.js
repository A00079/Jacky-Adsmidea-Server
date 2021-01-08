const router = require("express").Router();

const contactController = require("../controller/contact");

router.post("/", contactController.sendMail);

module.exports = router;
