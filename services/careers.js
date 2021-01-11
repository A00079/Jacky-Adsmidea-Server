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
  getSingleJob: (id, cb) => {
    const sql = "SELECT * FROM careers WHERE id = ?";
    const insertSql = [id];
    pool.query(sql, insertSql, (err, results) => {
      if (err) {
        return cb(err);
      } else {
        return cb(null, results);
      }
    });
  },

  createaddJob: (data, cb) => {
    const sql =
      "INSERT into careers (location, experience, salary, job_description, key_skills, education, job_title) VALUES (?,?,?,?,?,?,?)";
    const insertSql = [
      data.location,
      data.experience,
      data.salary,
      data.jobDescription,
      data.keySkills,
      data.education,
      data.jobTitle,
    ];
    pool.query(sql, insertSql, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  },

  JobUpdate: (data, param, cb) => {
    pool.getConnection((err, connection) => {
      connection.beginTransaction((err) => {
        if (err) {
          throw err;
        }
        const sql =
          "UPDATE careers SET location = ?, experience = ?, salary = ?, job_description = ?, key_skills = ?, education = ?, job_title = ? WHERE id = ?";
        const insertSql = [
          data.location,
          data.experience,
          data.salary,
          data.jobDescription,
          data.keySkills,
          data.education,
          data.jobTitle,
          param,
        ];
        connection.query(sql, insertSql, (err, results) => {
          if (err) {
            return connection.rollback((_) => {
              throw err;
            });
          }
          const sqlRetriveJob = "SELECT * FROM careers WHERE id = ?";
          var insertSqlRetriveJob = [param];
          connection.query(
            sqlRetriveJob,
            insertSqlRetriveJob,
            (err, results) => {
              if (err) {
                return connection.rollback((_) => {
                  throw err;
                });
              }
              connection.commit((err) => {
                if (err) {
                  connection.rollback((_) => {
                    throw err;
                  });
                }
                connection.release();
                cb(null, results);
              });
            }
          );
        });
      });
    });
  },

  deleteJob: (param, cb) => {
    const sql = "DELETE FROM careers WHERE id = ?";
    const insertSql = [param];
    pool.query(sql, insertSql, (err, results) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, results);
      }
    });
  },
};
