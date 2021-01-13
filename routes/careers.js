const router = require("express").Router();

const careerController = require("../controller/careers");

// GET
router.get("/jobs", careerController.allJobs);
router.get("/job", careerController.job);
router.get("/appliedjobs", careerController.appliedJobs);

// POST
router.post("/createjob", careerController.createJob);
router.post("/applyjob", careerController.applyJob);

// PATCH
router.patch("/updatejob/:id", careerController.updateJob);

// DELETE
router.delete("/deletejob/:id", careerController.deleteJob);
router.delete("/deleteappliedjob/:id", careerController.deleteAppliedJob);

module.exports = router;
