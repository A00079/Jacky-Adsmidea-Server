const router = require("express").Router();

const careerController = require("../controller/careers");

router.get("/jobs", careerController.allJobs);

module.exports = router;
