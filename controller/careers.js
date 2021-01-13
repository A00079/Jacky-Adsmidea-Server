const careersServices = require("../services/careers");

module.exports = {
  allJobs: (req, res) => {
    careersServices.getAllJobs((err, results) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          error: err,
        });
      } else {
        return res.status(200).json({
          status: "success",
          results: results.length,
          jobs: results,
        });
      }
    });
  },
  job: (req, res) => {
    const id = req.query.id;
    careersServices.getSingleJob(id, (err, results) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          error: err,
        });
      } else {
        return res.status(200).json({
          status: "success",
          job: results.length > 0 ? results[0] : "not found",
        });
      }
    });
  },

  createJob: (req, res) => {
    const body = req.body;
    careersServices.createJob(body, (err, results) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          error: err,
        });
      } else {
        return res.status(201).json({
          status: "success",
          message: "Job Posted",
        });
      }
    });
  },

  updateJob: (req, res) => {
    const body = req.body;
    const param = req.params.id;
    careersServices.JobUpdate(body, param, (err, results) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          error: err,
        });
      } else {
        return res.status(200).json({
          status: "success",
          job: results[0],
        });
      }
    });
  },

  deleteJob: (req, res) => {
    const param = req.params.id;
    careersServices.deleteJob(param, (err, results) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          error: err,
        });
      } else {
        return res.status(200).json({
          status: "success",
          message: "Job Deleted",
        });
      }
    });
  },

  deleteAppliedJob: (req, res) => {
    const param = req.params.id;
    careersServices.deleteAppliedJob(param, (err, results) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          error: err,
        });
      } else {
        return res.status(200).json({
          status: "success",
          message: "Job Deleted",
        });
      }
    });
  },

  applyJob: (req, res) => {
    const body = req.body;
    careersServices.applyJob(body, (err, results) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          error: err,
        });
      } else {
        return res.status(200).json({
          status: "success",
          message: "job applied",
        });
      }
    });
  },

  appliedJobs: (req, res) => {
    careersServices.getAppliedJobs((err, results) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          error: err,
        });
      } else {
        return res.status(200).json({
          status: "success",
          results: results.length,
          jobs: results,
        });
      }
    });
  },
};
