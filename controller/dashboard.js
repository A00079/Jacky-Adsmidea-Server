const dashboardServices = require("../services/dashboard");

module.exports = {
  getDashboardInfo: (req, res) => {
    dashboardServices.getInfo((err, results) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          error: err,
        });
      } else {
        return res.status(200).json({
          status: "success",
          info: results[0],
        });
      }
    });
  },
};
