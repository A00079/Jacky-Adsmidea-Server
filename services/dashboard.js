const pool = require("../dbconfig");

module.exports = {
  getInfo: (cb) => {
    const sql =
      "SELECT ( SELECT COUNT(*) FROM careers ) AS totalJobs, ( SELECT COUNT(*) FROM applied_jobs ) AS totalAppliedJobs FROM dual";

    pool.query(sql, (err, results) => {
      if (err) {
        return cb(err);
      } else {
        return cb(null, results);
      }
    });
  },
};
