const pool = require("../dbconfig");

module.exports = {
  getAllJobs: (cb) => {
    const sql = "SELECT * FROM careers";
    pool.query(sql, (err, results) => {
      if (err) {
        return cb(err);
      } else {
        return cb(err, results);
      }
    });
  },
};
