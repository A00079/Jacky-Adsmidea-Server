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
};
