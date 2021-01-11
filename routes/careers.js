const router = require("express").Router();

const careerController = require("../controller/careers");

// GET
router.get("/jobs", careerController.allJobs);
router.get("/job", careerController.job);

// POST
router.post("/createjob", careerController.createJob);

// PATCH
router.patch("/updatejob/:id", careerController.updateJob);

// DELETE
router.delete("/deletejob/:id", careerController.deleteJob);

module.exports = router;
