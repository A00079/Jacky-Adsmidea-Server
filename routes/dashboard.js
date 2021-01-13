const router = require("express").Router();

const dashboardController = require("../controller/dashboard");

// GET
router.get("/info", dashboardController.getDashboardInfo);


module.exports = router;
